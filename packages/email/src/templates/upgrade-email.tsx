import { DUB_WORDMARK, getPlanDetails } from "@dub/utils";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Footer } from "../components/footer";

export default function UpgradeEmail({
  name = "Brendon Urie",
  email = "panic@thedis.co",
  plan = "Business",
}: {
  name: string | null;
  email: string;
  plan: string;
}) {
  const planDetails = getPlanDetails(plan);
  return (
    <Html>
      <Head />
      <Preview>Thank you for upgrading to Dub {plan}!</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5">
            <Section className="mt-8">
              <Img src={DUB_WORDMARK} height="32" alt="Dub" />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-xl font-medium text-black">
              Thank you for upgrading to Dub {plan}!
            </Heading>
            <Section className="my-8">
              <Img
                src="https://assets.dub.co/misc/thank-you-thumbnail.jpg"
                alt="Thank you"
                className="max-w-[500px]"
              />
            </Section>
            <Text className="text-sm leading-6 text-black">
              Hey{name && ` ${name}`}!
            </Text>
            <Text className="text-sm leading-6 text-black">
              My name is Steven, and I'm the founder of Dub.
            </Text>
            <Text className="text-sm leading-6 text-black">
              I wanted to personally reach out to thank you for upgrading to{" "}
              <strong>Dub {plan}</strong>! Your support means the world to us
              and helps us continue to build and improve Dub.
            </Text>
            <Text className="text-sm leading-6 text-black">
              On the {plan} plan, you now have access to:
            </Text>
            {planDetails.features?.map((feature) => (
              <Text className="ml-1 text-sm leading-4 text-black">
                ✦{" "}
                {feature.tooltip?.href ? (
                  <Link href={feature.tooltip.href}>{feature.text}</Link>
                ) : (
                  feature.text
                )}
              </Text>
            ))}
            <Text className="text-sm leading-6 text-black">
              If you have any questions or feedback about Dub, please don't
              hesitate to reach out – I'm always happy to help!
            </Text>
            <Text className="text-sm font-light leading-6 text-neutral-400">
              Steven from Dub
            </Text>
            <Footer email={email} marketing />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
