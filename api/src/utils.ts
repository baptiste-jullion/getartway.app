export interface Coords {
    lng: number;
    lat: number;
}

const MAPBOX_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

export const retrieveCityAndAddressFromLocation = async (location: Coords) => {
    const url = new URL(
        `${MAPBOX_API_URL}/${location.lng},${location.lat}.json`,
    );
    url.searchParams.append("access_token", Bun.env.MAPBOX_PUBLIC_KEY!);

    const response1 = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    url.searchParams.append("types", "place");

    const response2 = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response1.ok && response2.ok) {
        const data1 = await response1.json();
        const data2 = await response2.json();
        return {
            city: data2.features[0].text,
            address: data1.features[0].place_name,
        };
    }

    return {
        city: "",
        address: "",
    };
};
