export const sendContactEmail = async (data: {
  username: string;
  email: string;
}) => {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "re_iQbYiMiF_CFP657nrZwQsUWJTeMfeftec",
    },
    body: JSON.stringify({
      from: "<onboarding@resend.dev>",
      to: data.email,
      subject: "hello world",
      html: `<strong>it works! ${data.username}</strong>`,
    }),
  });
};
