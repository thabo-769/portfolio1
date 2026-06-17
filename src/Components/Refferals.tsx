import styled from "styled-components";

type ReferralsProps = { darkMode: boolean };

const Section = styled.div`
  padding: 5rem 0;
  border-top: 1px solid;
  border-color: inherit;
`;

const Label = styled.span<{ $dark: boolean }>`
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: ${({ $dark }) => ($dark ? "#666666" : "#aaaaaa")};
`;

const Title = styled.h2<{ $dark: boolean }>`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
`;

const Bar = styled.div<{ $dark: boolean }>`
  width: 40px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 2rem;
  background: ${({ $dark }) => ($dark ? "#444444" : "#cccccc")};
`;

const Slider = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 0.75rem;

  /* hide scrollbar on desktop, keep functional */
  scrollbar-width: thin;
  scrollbar-color: #444 transparent;

  &::-webkit-scrollbar { height: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
`;

const Card = styled.div<{ $dark: boolean }>`
  flex: 0 0 260px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ $dark }) => ($dark ? "#252525" : "#e5e5e5")};
  background: ${({ $dark }) => ($dark ? "#1a1a1a" : "#ffffff")};
  transition: transform 0.22s ease, box-shadow 0.22s ease,
    border-color 0.22s ease;
  will-change: transform;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $dark }) => ($dark ? "#3a3a3a" : "#c0c0c0")};
    box-shadow: 0 10px 28px
      ${({ $dark }) => ($dark ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.09)")};
  }
`;

const Pic = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 0.9rem 1rem 1.1rem;
`;

const Name = styled.h3<{ $dark: boolean }>`
  font-size: 0.92rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
`;

const Quote = styled.p<{ $dark: boolean }>`
  font-size: 0.82rem;
  line-height: 1.6;
  color: ${({ $dark }) => ($dark ? "#999999" : "#666666")};
`;

const referrals = [
  { name: "John Doe",    image: "https://ui-avatars.com/api/?name=John+Doe&background=random&size=180",    text: "John is a great developer and a pleasure to work with." },
  { name: "Sarah Smith", image: "https://ui-avatars.com/api/?name=Sarah+Smith&background=random&size=180", text: "Excellent problem-solving skills and teamwork." },
  { name: "Mike Johnson",image: "https://ui-avatars.com/api/?name=Mike+Johnson&background=random&size=180",text: "Always delivers high-quality work on time." },
  { name: "David Brown", image: "https://ui-avatars.com/api/?name=David+Brown&background=random&size=180", text: "Very professional and reliable developer." },
  { name: "Emily Davis",  image: "https://ui-avatars.com/api/?name=Emily+Davis&background=random&size=180",  text: "Strong technical skills and communication." },
  { name: "James Wilson", image: "https://ui-avatars.com/api/?name=James+Wilson&background=random&size=180", text: "Creative thinker and outstanding collaborator." },
];

function Referrals({ darkMode }: ReferralsProps) {
  return (
    <Section>
      <Label $dark={darkMode}>Kind Words</Label>
      <Title $dark={darkMode}>Referrals</Title>
      <Bar $dark={darkMode} />
      <Slider>
        {referrals.map((r, i) => (
          <Card key={i} $dark={darkMode}>
            <Pic src={r.image} alt={r.name} />
            <CardBody>
              <Name $dark={darkMode}>{r.name}</Name>
              <Quote $dark={darkMode}>"{r.text}"</Quote>
            </CardBody>
          </Card>
        ))}
      </Slider>
    </Section>
  );
}

export default Referrals;