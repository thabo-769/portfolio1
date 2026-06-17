import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

type ContactProps = {
  darkMode: boolean;
};

const ContactContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 8rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 700px;
`;

const Button = styled.button<{ $darkMode: boolean }>`
  padding: 1rem;
  border: 2px solid
    ${({ $darkMode }) => ($darkMode ? "#ffffff" : "#121212")};
  border-radius: 10px;
  background: transparent;
  color: ${({ $darkMode }) => ($darkMode ? "#ffffff" : "#121212")};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: all 0.3s ease;

  &:hover {
    background: ${({ $darkMode }) => ($darkMode ? "#ffffff" : "#121212")};
    color: ${({ $darkMode }) => ($darkMode ? "#121212" : "#ffffff")};
    transform: translateY(-2px);
  }
`;

function Contact({ darkMode }: ContactProps) {
  const textColor = darkMode ? "#ffffff" : "#121212";
  const backgroundColor = darkMode
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(0, 0, 0, 0.05)";

  const commonFieldStyles = {
    "& .MuiInputLabel-root": {
      color: textColor,
    },
    "& .MuiOutlinedInput-root": {
      color: textColor,
      "& fieldset": {
        borderColor: textColor,
      },
      "&:hover fieldset": {
        borderColor: textColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: textColor,
      },
    },
  };

  return (
    <ContactContainer id="contact">
      <Title style={{ color: textColor }}>Contact Me</Title>

      <Form
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
        />

        <input
          type="hidden"
          name="subject"
          value="New Portfolio Contact Message"
        />

        <TextField
          label="Username"
          name="name"
          variant="outlined"
          required
          fullWidth
          autoComplete="name"
          sx={commonFieldStyles}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: textColor }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          required
          fullWidth
          autoComplete="email"
          sx={commonFieldStyles}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: textColor }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Message"
          name="message"
          variant="outlined"
          required
          multiline
          rows={6}
          fullWidth
          sx={{
            ...commonFieldStyles,
            "& .MuiOutlinedInput-root": {
              ...commonFieldStyles["& .MuiOutlinedInput-root"],
              backgroundColor,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ alignSelf: "flex-start", mt: 1 }}
                >
                  <MessageIcon sx={{ color: textColor }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button type="submit" $darkMode={darkMode}>
          <SendIcon />
          Send Message
        </Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;