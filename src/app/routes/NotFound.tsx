import { Button, H2, ParMd, ParSm, widthQuery } from "@/lib/ui";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  min-height: 42rem;
  padding: 4rem 2rem;
  text-align: center;

  @media ${widthQuery.sm} {
    min-height: 34rem;
    padding: 3rem 1rem;
  }
`;

const Eyebrow = styled(ParSm)`
  color: ${({ theme }) => theme.primary.step10};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
`;

const Description = styled(ParMd)`
  color: ${({ theme }) => theme.secondary.step11};
  max-width: 48rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.8rem;
`;

const getErrorMessage = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return error.status === 404
      ? "The route you requested does not exist or uses an unsupported network."
      : error.statusText || "The route could not be loaded.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "The route you requested does not exist or uses an unsupported network.";
};

export const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const isKnownError = Boolean(error);

  return (
    <Wrapper>
      <Eyebrow>{isKnownError ? "Route error" : "404"}</Eyebrow>
      <H2>Page not found</H2>
      <Description>{getErrorMessage(error)}</Description>
      <Actions>
        <Button onClick={() => navigate("/")}>
          Go to hub
        </Button>
        <Button
          variant="outline"
          color="secondary"
          onClick={() => navigate("/summon")}
        >
          Summon a DAO
        </Button>
      </Actions>
    </Wrapper>
  );
};
