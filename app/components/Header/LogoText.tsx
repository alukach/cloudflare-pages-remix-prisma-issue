import React from "react";
import { useLogoColors, type LogoProps } from "./use-logo-colors";

import logo from "~/images/logo.svg";
import { Group } from "@mantine/core";

export function LogoText({ size, color, ...others }: LogoProps) {
  const colors = useLogoColors(color);

  return (
    <Group spacing={5}>
      {/* TODO: How to support night mode? */}
      {/* https://thenounproject.com/icon/cash-register-1055306/ */}
      <img height={size} src={logo} alt="Till Logo" />
      <h1>till</h1>
    </Group>
  );
}
