import { Group, useMantineTheme } from "@mantine/core";

export const LogoText: React.FC<Props> = ({ size }) => {
  const theme = useMantineTheme();
  return (
    <Group spacing={5}>
      {/* https://thenounproject.com/icon/cash-register-1055306/ */}
      <img
        height={size}
        src={`/logo.svg?${theme.colorScheme}`}
        alt="Till Logo"
      />
      <h1 style={{ textTransform: "lowercase" }}>Till</h1>
    </Group>
  );
};

interface Props {
  size: number;
}
