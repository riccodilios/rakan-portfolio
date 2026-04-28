export default function Head() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
  const ogImage = siteUrl ? `${siteUrl}/projects/rakan.png` : "/projects/rakan.png";
  const title = "Rakan Alhakim — SaaS Product Engineer & AI Builder";
  const description =
    "SaaS product engineer, AI builder, and digital systems architect based in Riyadh, Saudi Arabia. Building serious technology with senior-level product thinking.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

