import { styled } from "styled-components";

const Apostrophe = styled.div`
  position: absolute;
  top: 24rem;
  left: 3rem;
  width: 3rem;
  height: 13rem;

  font-family: "Comforter";
  font-size: 6rem;
  transform: matrix(0.97, -0.24, 0.29, 0.96, 0, 0);

  background: linear-gradient(
    92.88deg,
    rgb(69, 94, 181) 9.16%,
    rgb(86, 67, 204) 43.89%,
    rgb(103, 63, 215) 64.72%
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0.5;
`;

const Difficulty = styled.div`
  position: absolute;
  width: 32rem;
  height: 13.5rem;
  top: 19rem;
  left: 4rem;

  font-family: "Comforter";
  font-weight: 400;
  font-size: 6rem;
  line-height: 13.5rem;

  transform: matrix(0.97, -0.24, 0.29, 0.96, 0, 0);

  background: linear-gradient(
    92.88deg,
    rgb(69, 94, 181) 9.16%,
    rgb(86, 67, 204) 43.89%,
    rgb(103, 63, 215) 64.72%
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0.5;
`;

const Signal = styled.div`
  position: absolute;
  width: 13rem;
  height: 3rem;

  top: 29.5rem;
  left: 14.5rem;

  font-weight: 400;
  font-size: 1.3rem;
  line-height: 3rem;
  letter-spacing: 0.2px;

  background: linear-gradient(
    92.88deg,
    rgb(69, 94, 181) 9.16%,
    rgb(86, 67, 204) 43.89%,
    rgb(103, 63, 215) 64.72%
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0.8;
`;

const Failure = styled.div`
  position: absolute;
  width: 19rem;
  height: 13.5rem;
  top: 27.5rem;
  left: 8.5rem;

  font-family: "Comforter";
  font-weight: 400;
  font-size: 6rem;
  line-height: 13.5rem;

  transform: matrix(0.97, -0.24, 0.29, 0.96, 0, 0);

  background: linear-gradient(
    92.88deg,
    rgb(69, 94, 181) 9.16%,
    rgb(86, 67, 204) 43.89%,
    rgb(103, 63, 215) 64.72%
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0.5;
`;

const Part = styled.div`
  position: absolute;
  width: 144px;
  height: 30px;
  top: 36.4rem;
  left: 14.5rem;

  font-style: normal;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 3rem;
  letter-spacing: 0.2px;

  background: linear-gradient(
    92.88deg,
    rgb(69, 94, 181) 9.16%,
    rgb(86, 67, 204) 43.89%,
    rgb(103, 63, 215) 64.72%
  );

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 1;
`;

function Aphorism() {
  return (
    <div>
      <Apostrophe>&ldquo;</Apostrophe>
      <Difficulty>Difficulty</Difficulty>
      <Signal>is signal of growth,</Signal>
      <Failure>failure</Failure>
      <Part>is part of growth.</Part>
    </div>
  );
}

export default Aphorism;
