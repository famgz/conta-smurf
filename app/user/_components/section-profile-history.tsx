import ProfileBanner from '@/app/user/_components/profile-banner';
import PurchaseHistory from '@/app/user/_components/purchase-history-table';

interface Props {
  windowWidth: number;
}

export default function UserProfileAndPurchaseHistorySection({
  windowWidth,
}: Props) {
  return (
    <div className="flex flex-col items-center space-x-5 xl:grid xl:grid-cols-[1fr_3fr]">
      {/* column 1 - profile information */}
      <ProfileBanner />

      {/* column 2 - purchase history - desktop only */}
      {!!windowWidth && windowWidth >= 1280 && <PurchaseHistory />}
    </div>
  );
}
