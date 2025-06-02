import { TExhibition } from "#dtos/exhibition.dto";
import { Prisma } from "#models";
import { retrieveCityAndAddressFromLocation } from "#utils";

const EnrichLocationMiddleware: Prisma.Middleware = async (params, next) => {
    if (
        params.model === "Location" &&
        ["create", "createMany", "update", "updateMany"].includes(params.action)
    ) {
        if (params.action === "create" || params.action === "update") {
            const { lng, lat } = params.args.data;
            const { city, address } = await retrieveCityAndAddressFromLocation({
                lng,
                lat,
            });
            params.args.data.city = city;
            params.args.data.address = address;
        } else {
            await Promise.all([
                ...params.args.data.map(
                    async (location: TExhibition["location"]) => {
                        const { lng, lat } = location;
                        const { city, address } =
                            await retrieveCityAndAddressFromLocation({
                                lng,
                                lat,
                            });
                        location.city = city;
                        location.address = address;
                    },
                ),
            ]);
        }
    }

    return next(params);
};

export default EnrichLocationMiddleware;
