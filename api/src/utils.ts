export interface Coords {
    lng: number;
    lat: number;
}

const MAPBOX_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

export const retrieveCityFromLocation = async (location: Coords) => {
    const url = new URL(
        `${MAPBOX_API_URL}/${location.lng},${location.lat}.json`,
    );
    url.searchParams.append("types", "place");
    url.searchParams.append("access_token", Bun.env.MAPBOX_PUBLIC_KEY!);

    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();
        return data.features[0].text;
    }
};
