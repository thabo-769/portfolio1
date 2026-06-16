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
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 700px;
`;

const Button = styled.button`
  padding: 1rem;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background: transparent;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #121212;
    transform: translateY(-2px);
  }
`;

function Contact({ darkMode }: ContactProps) {
  return (
    <ContactContainer id="contact">
      <Title>Contact Me</Title>

      <Form
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="2812db02-c66f-437f-a43b-15300eec4fb4"
        />

        <TextField
          label="Username"
          variant="standard"
          name="name"
          required
          fullWidth
          sx={{
            input: {
              color: "#fff",
            },
            label: {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#fff",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#fff",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          required
          fullWidth
          sx={{
            input: {
              color: "#fff",
            },
            label: {
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#fff",
              },
              "&:hover fieldset": {
                borderColor: "#fff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#fff",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Message"
          variant="filled"
          name="message"
          required
          multiline
          rows={6}
          fullWidth
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& textarea": {
              color: "#fff",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit">
          <SendIcon />
          Send Message
        </Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;