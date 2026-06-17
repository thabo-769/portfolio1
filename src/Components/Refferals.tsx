import styled from "styled-components";

type ReferralsProps = {
  darkMode: boolean;
};

const Container = styled.div`
  padding: 5rem 8rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 4rem 2rem;
  }
`;

const SectionLabel = styled.span<{ darkMode: boolean }>`
  display: block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: ${(props) => (props.darkMode ? "#888888" : "#999999")};
`;

const ReferralsTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -0.5px;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const Divider = styled.div<{ darkMode: boolean }>`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 2rem;
  background: ${(props) => (props.darkMode ? "#444444" : "#cccccc")};
`;

const ReferralsSlider = styled.div`
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444444;
    border-radius: 10px;
  }
`;

const ReferralCard = styled.div<{ darkMode: boolean }>`
  flex: 0 0 280px;
  background: ${(props) => (props.darkMode ? "#1a1a1a" : "#ffffff")};
  border: 1px solid ${(props) => (props.darkMode ? "#2a2a2a" : "#e5e5e5")};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => (props.darkMode ? "#444444" : "#bbbbbb")};
    box-shadow: 0 8px 24px
      ${(props) => (props.darkMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.08)")};
  }
`;

const ReferralImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
`;

const ReferralCardContent = styled.div`
  padding: 1rem;
`;

const ReferralName = styled.h3<{ darkMode: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const ReferralContent = styled.p<{ darkMode: boolean }>`
  font-size: 0.875rem;
  line-height: 1.65;
  color: ${(props) => (props.darkMode ? "#aaaaaa" : "#666666")};
`;

const referrals = [
  {
    name: "John Doe",
    image: `https://ui-avatars.com/api/?name=John+Doe&background=random&size=180`,
    text: "John is a great developer and a pleasure to work with.",
  },
  {
    name: "Sarah Smith",
    image: `https://ui-avatars.com/api/?name=Sarah+Smith&background=random&size=180`,
    text: "Excellent problem-solving skills and teamwork.",
  },
  {
    name: "Mike Johnson",
    image: `https://ui-avatars.com/api/?name=Mike+Johnson&background=random&size=180`,
    text: "Always delivers high-quality work on time.",
  },
  {
    name: "David Brown",
    image: `https://ui-avatars.com/api/?name=David+Brown&background=random&size=180`,
    text: "Very professional and reliable developer.",
  },
  {
    name: "Emily Davis",
    image: `https://ui-avatars.com/api/?name=Emily+Davis&background=random&size=180`,
    text: "Strong technical skills and communication.",
  },
  {
    name: "James Wilson",
    image: `https://ui-avatars.com/api/?name=James+Wilson&background=random&size=180`,
    text: "Creative thinker and outstanding collaborator.",
  },
];

function Referrals({ darkMode }: ReferralsProps) {
  return (
    <Container>
      <SectionLabel darkMode={darkMode}>Kind Words</SectionLabel>
      <ReferralsTitle darkMode={darkMode}>Referrals</ReferralsTitle>
      <Divider darkMode={darkMode} />

      <ReferralsSlider>
        {referrals.map((referral, index) => (
          <ReferralCard key={index} darkMode={darkMode}>
            <ReferralImage src={referral.image} alt={referral.name} />
            <ReferralCardContent>
              <ReferralName darkMode={darkMode}>{referral.name}</ReferralName>
              <ReferralContent darkMode={darkMode}>
                "{referral.text}"
              </ReferralContent>
            </ReferralCardContent>
          </ReferralCard>
        ))}
      </ReferralsSlider>
    </Container>
  );
}

export default Referrals;