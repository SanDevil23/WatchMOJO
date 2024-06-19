// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <footer className="bg-gray-900 text-white py-8">
//         <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
//           <div className="flex items-center mb-4">
//             {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-2" /> */}
//             <span className="text-xl font-bold"></span>
//           </div>
//           <p className="text-center text-gray-400">
//             © 2024 WatchMojo. All rights reserved.
//           </p>
//         </div>
//       </footer>

//     </div>
//   )
// }

// export default Footer





import { Paper, Stack, Button, Box } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "inherit" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;