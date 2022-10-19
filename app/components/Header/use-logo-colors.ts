import { type MantineColor, useMantineTheme } from "@mantine/core";

export interface LogoProps extends React.ComponentPropsWithoutRef<"svg"> {
  color?: MantineColor;
  size: number;
}

export function useLogoColors(color: MantineColor | undefined) {
  const theme = useMantineTheme();

  return {
    accent: theme.fn.primaryColor(),
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  };
}
