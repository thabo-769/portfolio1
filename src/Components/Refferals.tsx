import styled from "styled-components";

type ReferralsProps = {
  darkMode: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2rem;
`;

const ReferralsSection = styled.section`
  width: 100%;
`;

const ReferralsTitle = styled.h2<{ darkMode: boolean }>`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const ReferralsSlider = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
  }
`;

const ReferralCard = styled.div<{ darkMode: boolean }>`
  flex: 0 0 300px;
  background: ${(props) => (props.darkMode ? "#111111" : "#ffffff")};
  border: 1px solid ${(props) => (props.darkMode ? "#222222" : "#dddddd")};
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) =>
      props.darkMode ? "#555555" : "#999999"};
  }
`;

const ReferralImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

const ReferralCardContent = styled.div`
  padding: 1rem;
`;

const ReferralName = styled.h3<{ darkMode: boolean }>`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  color: ${(props) => (props.darkMode ? "#ffffff" : "#121212")};
`;

const ReferralContent = styled.p<{ darkMode: boolean }>`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${(props) => (props.darkMode ? "#bbbbbb" : "#555555")};
`;

function Referrals({ darkMode }: ReferralsProps) {
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

  return (
    <Container>
      <ReferralsSection>
        <ReferralsTitle darkMode={darkMode}>
          My Referrals
        </ReferralsTitle>

        <ReferralsSlider>
          {referrals.map((referral, index) => (
            <ReferralCard
              key={index}
              darkMode={darkMode}
            >
              <ReferralImage
                src={referral.image}
                alt={referral.name}
              />

              <ReferralCardContent>
                <ReferralName darkMode={darkMode}>
                  {referral.name}
                </ReferralName>

                <ReferralContent darkMode={darkMode}>
                  {referral.text}
                </ReferralContent>
              </ReferralCardContent>
            </ReferralCard>
          ))}
        </ReferralsSlider>
      </ReferralsSection>
    </Container>
  );
}

export default Referrals;