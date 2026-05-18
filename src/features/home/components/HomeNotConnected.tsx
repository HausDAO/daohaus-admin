import styled from "styled-components";
import { H1, ParMd, ParXl } from "@/lib/ui";

const MONKEY_ASCII = String.raw`
  .-"-.  .-"-. 
 / .-- \/ .-- \
| |    || |    |
| |.-""|| |.-""|
\ \__/\ \\ \__/ /
 '.__.'  '.__.'
 / /  _   _  \ \
| |  (o) (o)  | |
| |    .-.    | |
\ \   (___)  / /
 '._'-.___.-'_.'
    '-._____.-'
`;

const ViewBox = styled.div`
  width: 100%;
  min-height: 40rem;
  display: flex;
  margin-top: 4rem;

  .text-section {
    width: 100%;
    max-width: 48rem;
  }
  .hero {
    font-size: 6rem;
    font-weight: 900;
    margin-bottom: 1.6rem;
  }
  .tag-line {
    font-size: 2rem;
    margin-bottom: 2.4rem;
    font-weight: 700;
  }
  .monkey-wrap {
    margin-bottom: 2.4rem;
    overflow-x: auto;
  }
  pre {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.3;
    font-family: "Courier New", Courier, monospace;
    white-space: pre;
  }
  ul {
    padding-inline-start: 2.4rem;
    margin-top: 1.6rem;
  }
  li {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 640px) {
    .hero {
      font-size: 4.8rem;
    }
    pre {
      font-size: 1.2rem;
    }
  }
`;

export const HomeNotConnected = () => {
  return (
    <ViewBox>
      <div className="text-section">
        <H1 className="hero">HUB</H1>
        <ParXl className="tag-line">
          Schelling point for all your DAO activity
        </ParXl>
        <div className="monkey-wrap">
          <pre aria-label="ASCII art monkey">{MONKEY_ASCII}</pre>
        </div>
        <ParMd>Connect a wallet to:</ParMd>
        <ul>
          <li>
            <ParMd>See all your DAOs</ParMd>
          </li>
          <li>
            <ParMd>View Active Proposals</ParMd>
          </li>
          <li>
            <ParMd>Manage your shared profile</ParMd>
          </li>
        </ul>
      </div>
    </ViewBox>
  );
};
