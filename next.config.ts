// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
       "assets.bayut.com", 
       "oss.pixxicrm.com", 
       "s3-ap-southeast-1.amazonaws.com"
    ], 
  },
};

export default nextConfig;