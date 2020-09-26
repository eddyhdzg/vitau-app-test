import {
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Theme } from "theme";

const RestyleBox = createBox<Theme>();

type Props = VariantProps<Theme, "boxVariants"> &
  React.ComponentProps<typeof RestyleBox>;

const Box = createRestyleComponent<Props, Theme>([
  createVariant({ themeKey: "boxVariants" }),
]);

export default Box;
