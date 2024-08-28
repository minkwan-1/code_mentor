import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f5f5",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* CompanyInfo Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                borderBottom: { xs: "1px dotted gray", md: "none" },
                borderRight: { xs: "none", md: "1px dotted gray" },
                pb: 2,
                pr: 2,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                회사 정보
              </Typography>
              <Typography variant="body2">
                TORTEE는 전문적인 개발 멘토링 서비스를 제공하는 플랫폼입니다.
                경험이 풍부한 개발자와 연결되어 끊임없이 성장하는 것을 목표로
                하고 있습니다.
              </Typography>
            </Box>
          </Grid>

          {/* QuickLinks Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                borderBottom: { xs: "1px dotted gray", md: "none" },
                borderRight: { xs: "none", md: "1px dotted gray" },
                pb: 2,
                pr: 2,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                빠른 링크
              </Typography>
              <Typography sx={{ display: "block", mb: 1 }}>홈</Typography>
              <Typography sx={{ display: "block", mb: 1 }}>기능</Typography>
              <Typography sx={{ display: "block", mb: 1 }}>가격</Typography>
              <Typography sx={{ display: "block", mb: 1 }}>연락처</Typography>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                borderBottom: { xs: "1px dotted gray", md: "none" },
                borderRight: { xs: "none", md: "1px dotted gray" },
                pb: 2,
                pr: 2,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                연락처
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                이메일: contact@yourplatform.com
              </Typography>
              <Typography variant="body2">전화: +82-10-1234-5678</Typography>
            </Box>
          </Grid>

          {/* SocialMedia Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                borderBottom: { xs: "1px dotted gray", md: "none" },
                pb: 2,
                pr: 2,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                소셜 미디어
              </Typography>
              <Box>
                <IconButton
                  aria-label="Facebook"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  href="https://twitter.com"
                  target="_blank"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Copyright Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Your Platform. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
