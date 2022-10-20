import { createStyles, Overlay, Container, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(255, 255, 0, 0.5),
        rgba(0, 0, 255, 0.5)
      ), url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />

      <Container className={classes.container}>
        <Title className={classes.title}>
          Powertools for your cloud-datasets
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Manage, track, and monetize access to your S3 buckets through Till's
          transparent S3 gateway.
        </Text>
      </Container>
    </div>
  );
}

/**
 * TALKING POINTS
 *
 * - 📈 Analytics: Rich analytics provide insights into who and
 * - ⚡️ Fast: Operated by Cloudflare, our servers are accessible within 50 ms to 95% of the entire Internet-connected world and within 20ms to 80% of the entire Internet-connected world.
 * - 💳 Stripe Integration: Apply custom billing policies to automatically charge data-consumers based on realtime data-metering.
 */
