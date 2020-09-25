import {
  createBox,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "theme";

const RestyleBox = createBox<Theme>();

type Props = SpacingProps<Theme> &
  VariantProps<Theme, "boxVariants"> &
  React.ComponentProps<typeof RestyleBox>;
const Box = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "boxVariants" }),
]);

export default Box;
