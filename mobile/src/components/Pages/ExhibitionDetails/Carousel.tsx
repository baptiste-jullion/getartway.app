import { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Icon } from "~/components/Icons/Icon";
import { Button } from "~/components/UI/Button";
import { Heading } from "~/components/UI/Heading";
import { ArtwayColors } from "~/utils/constants";
import React from "react";
import { Dimensions, Image, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

interface ExhibitionDetailsCarouselProps {
    exhibition: TExhibition;
}

export const ExhibitionDetailsCarousel: React.FC<
    ExhibitionDetailsCarouselProps
> = ({ exhibition }) => {
    const progress = useSharedValue<number>(0);
    const ref = React.useRef<ICarouselInstance>(null);

    return (
        <View
            style={{
                padding: 16,
            }}
        >
            <Heading headingLevel="h2" style={{ marginBottom: 16 }}>
                L'exposition en photo
            </Heading>
            <View style={{ position: "relative" }}>
                <Carousel
                    ref={ref}
                    loop={true}
                    width={Dimensions.get("window").width - 32}
                    style={{ borderRadius: 8 }}
                    height={200}
                    snapEnabled={true}
                    pagingEnabled={true}
                    data={exhibition.medias}
                    onProgressChange={progress}
                    renderItem={({ item, index }) => (
                        <Image
                            key={index}
                            source={{ uri: item }}
                            style={{
                                width: "100%",
                                height: 200,
                                resizeMode: "cover",
                            }}
                        />
                    )}
                />
                <View
                    style={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                        padding: 8,
                        top: "50%",
                        transform: [{ translateY: "-50%" }],
                    }}
                >
                    <Button
                        onPress={() => {
                            ref.current?.prev();
                        }}
                    >
                        <Icon
                            name="Chevron"
                            color={ArtwayColors.BLACK}
                            style={{ transform: [{ rotate: "180deg" }] }}
                        />
                    </Button>
                    <Button
                        onPress={() => {
                            ref.current?.next();
                        }}
                    >
                        <Icon name="Chevron" color={ArtwayColors.BLACK} />
                    </Button>
                </View>
            </View>
        </View>
    );
};
