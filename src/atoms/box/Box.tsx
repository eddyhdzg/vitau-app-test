import {
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
  BackgroundColorProps,
  backgroundColor,
  color,
  ColorProps,
  border,
  BorderProps,
  spacing,
  SpacingProps,
} from "@shopify/restyle";
import { Theme } from "theme";

const RestyleBox = createBox<Theme>();

type Props = BorderProps<Theme> &
  SpacingProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "boxVariants"> &
  React.ComponentProps<typeof RestyleBox>;

const Box = createRestyleComponent<Props, Theme>([
  spacing,
  backgroundColor,
  color,
  border,
  createVariant({ themeKey: "boxVariants" }),
]);

export default Box;
