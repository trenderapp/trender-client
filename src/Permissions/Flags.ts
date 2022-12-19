export const UserFlags = {
  TRENDER_EMPLOYEE: 1 << 0, // Employee account
  TRENDER_PARTNER: 1 << 1, // Partner account
  VERIFIED_USER: 1 << 2, // Certified account
  PREMIUM_USER: 1 << 3, // Premium level 1 account
  EARLY_SUPPORTER: 1 << 4, // Early supporter account
  CERTIFIED_MODERATOR: 1 << 5, // Certified moderator account
  PREMIUM_2_USER: 1 << 6, // Premium level 2 account
  PREMIUM_3_USER: 1 << 7, // Premium level 3 account
};

export default UserFlags;
