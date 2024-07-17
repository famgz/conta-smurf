import useWindowDimensions from '@/app/_hooks/use-window-dimensions';
import ProfileBanner from '@/app/user/_components/profile-banner';
import PurchaseHistory from '@/app/user/_components/purchase-history-table';

export default function UserProfileAndPurchaseHistorySection() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="flex flex-col space-x-5 xl:grid xl:grid-cols-[1fr_3fr]">
      {/* column 1 - profile information */}
      <ProfileBanner />

      {/* column 2 - purchase history - desktop only */}
      {!!width && width >= 1280 && <PurchaseHistory />}
    </div>
  );
}
