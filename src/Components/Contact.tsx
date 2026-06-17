import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";

type ContactProps = { darkMode: boolean };

const Section = styled.div`
  padding: 5rem 0 6rem;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  max-width: 580px;
`;

const SubmitBtn = styled.button<{ $dark: boolean }>`
  align-self: flex-start;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  border: 1.5px solid ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
  background: transparent;
  color: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.22s, color 0.22s, transform 0.22s;
  will-change: transform;

  &:hover {
    background: ${({ $dark }) => ($dark ? "#ffffff" : "#111111")};
    color: ${({ $dark }) => ($dark ? "#111111" : "#ffffff")};
    transform: translateY(-2px);
  }
`;

function Contact({ darkMode }: ContactProps) {
  const tc = darkMode ? "#ffffff" : "#111111";

  const sx = {
    "& .MuiInputLabel-root": { color: darkMode ? "#888" : "#888" },
    "& .MuiOutlinedInput-root": {
      color: tc,
      "& fieldset": { borderColor: darkMode ? "#2e2e2e" : "#dddddd" },
      "&:hover fieldset": { borderColor: darkMode ? "#555" : "#aaaaaa" },
      "&.Mui-focused fieldset": { borderColor: tc },
    },
  };

  return (
    <Section id="contact">
      <Label $dark={darkMode}>Get In Touch</Label>
      <Title $dark={darkMode}>Contact Me</Title>
      <Bar $dark={darkMode} />

      <Form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
        <input type="hidden" name="subject" value="New Portfolio Contact Message" />

        <TextField label="Name" name="name" variant="outlined" required fullWidth autoComplete="name" sx={sx}
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: tc }} /></InputAdornment> } }} />

        <TextField label="Email" name="email" type="email" variant="outlined" required fullWidth autoComplete="email" sx={sx}
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: tc }} /></InputAdornment> } }} />

        <TextField label="Message" name="message" variant="outlined" required multiline rows={6} fullWidth
          sx={{ ...sx, "& .MuiOutlinedInput-root": { ...sx["& .MuiOutlinedInput-root"], background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)" } }}
          slotProps={{ input: { startAdornment: <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}><MessageIcon sx={{ color: tc }} /></InputAdornment> } }} />

        <SubmitBtn type="submit" $dark={darkMode}>
          <SendIcon fontSize="small" />
          Send Message
        </SubmitBtn>
      </Form>
    </Section>
  );
}

export default Contact;