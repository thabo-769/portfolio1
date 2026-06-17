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
  color: ${({ darkMode }) => (darkMode ? "#888888" : "#999999")};
`;

const Title = styled.h2<{ darkMode: boolean }>`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -0.5px;
  color: ${({ darkMode }) => (darkMode ? "#ffffff" : "#121212")};
`;

const Divider = styled.div<{ darkMode: boolean }>`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  margin-bottom: 2rem;
  background: ${({ darkMode }) => (darkMode ? "#444444" : "#cccccc")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 640px;
`;

const SubmitButton = styled.button<{ darkMode: boolean }>`
  padding: 0.85rem 2rem;
  border: 1.5px solid ${({ darkMode }) => (darkMode ? "#ffffff" : "#121212")};
  border-radius: 8px;
  background: transparent;
  color: ${({ darkMode }) => (darkMode ? "#ffffff" : "#121212")};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: fit-content;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ darkMode }) => (darkMode ? "#ffffff" : "#121212")};
    color: ${({ darkMode }) => (darkMode ? "#121212" : "#ffffff")};
    transform: translateY(-2px);
  }
`;

function Contact({ darkMode }: ContactProps) {
  const textColor = darkMode ? "#ffffff" : "#121212";

  const fieldStyles = {
    "& .MuiInputLabel-root": { color: textColor },
    "& .MuiOutlinedInput-root": {
      color: textColor,
      "& fieldset": { borderColor: darkMode ? "#333333" : "#cccccc" },
      "&:hover fieldset": { borderColor: textColor },
      "&.Mui-focused fieldset": { borderColor: textColor },
    },
  };

  return (
    <ContactContainer id="contact">
      <SectionLabel darkMode={darkMode}>Get In Touch</SectionLabel>
      <Title darkMode={darkMode}>Contact Me</Title>
      <Divider darkMode={darkMode} />

      <Form action="https://api.web3forms.com/submit" method="POST">
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
          label="Name"
          name="name"
          variant="outlined"
          required
          fullWidth
          autoComplete="name"
          sx={fieldStyles}
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
          sx={fieldStyles}
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
            ...fieldStyles,
            "& .MuiOutlinedInput-root": {
              ...fieldStyles["& .MuiOutlinedInput-root"],
              backgroundColor: darkMode
                ? "rgba(255,255,255,0.04)"
                : "rgba(0,0,0,0.02)",
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

        <SubmitButton type="submit" darkMode={darkMode}>
          <SendIcon fontSize="small" />
          Send Message
        </SubmitButton>
      </Form>
    </ContactContainer>
  );
}

export default Contact;