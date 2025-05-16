import { TExhibition } from "#dtos/exhibition.dto";
import { Prisma } from "#models";
import { retrieveCityFromLocation } from "#utils";

const EnrichLocationMiddleware: Prisma.Middleware = async (params, next) => {
    if (
        params.model === "Location" &&
        ["create", "createMany", "update", "updateMany"].includes(params.action)
    ) {
        if (params.action === "create" || params.action === "update") {
            const { lng, lat } = params.args.data;
            params.args.data.city = await retrieveCityFromLocation({
                lng,
                lat,
            });
        } else {
            await Promise.all([
                ...params.args.data.map(
                    async (location: TExhibition["location"]) => {
                        const { lng, lat } = location;
                        location.city = await retrieveCityFromLocation({
                            lng,
                            lat,
                        });
                    },
                ),
            ]);
        }
    }

    return next(params);
};

export default EnrichLocationMiddleware;
