import { ActiveCampaignsNav } from "../components/ActiveCampingsNav";

/**
 * Layout for the Campaigns section
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export default function CampaignsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ActiveCampaignsNav />
      {children}
    </>
  );
}