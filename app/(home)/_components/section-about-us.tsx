import AboutUsCard from '@/app/(home)/_components/about-us-card';

export default function AboutUs() {
  return (
    <div className="flex-center py-10">
      <div className="flex h-full max-h-[1080px] max-w-[1200px] flex-col justify-between">
        <h2 className="text-6xl font-extrabold text-brass shadow-brass text-shadow-sm">
          About us
        </h2>

        <div className="flex justify-between">
          <AboutUsCard
            imageUrl="/images/our-mission.png"
            title="Your trust, Our Mission"
            text="Founded in 2023, we earn your trust through quality assurance with our products and services, guaranteeing an unparalleled gaming journey. Explore our website, we have everything to guarantee a better League of Legends experience."
            className="mt-5"
          />

          <AboutUsCard
            imageUrl="/images/satisfaction.png"
            title="Your satisfaction is essential!"
            text="Since the beginning, ContaSmurf has been the definitive League of Legends portal. Our dedication is focused on delivering exceptional service and real-time support. Elevate your game with our carefully chosen top-tier accounts!"
            className="mt-20"
          />

          <AboutUsCard
            imageUrl="/images/we-care.png"
            title="We care about you!"
            text="Our focus is to deliver incredible service to all of our customers. ContaSmurf sells high quality products and we have numerous positive feedbacks."
            className="mt-5"
          />
        </div>

        <p className="text-justify text-xs font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
          quisquam esse voluptatibus dolore, excepturi similique recusandae
          tempore sapiente veritatis earum maxime doloremque porro, illum ut
          impedit perspiciatis ad laboriosam! Corrupti. Commodi provident
          repudiandae sapiente voluptatibus, recusandae accusamus magnam numquam
          omnis atque praesentium officiis enim eum, reiciendis eveniet. Sunt
          porro cupiditate voluptatibus quam earum suscipit, numquam sequi quas
          facilis in iure! Voluptates officia quaerat maxime mollitia temporibus
          natus, nihil iste quidem tenetur minima! Ab iste possimus maxime
          pariatur consectetur maiores, velit dolor nihil architecto. Natus
          ducimus porro quas enim, consequatur nesciunt. Praesentium, natus?
          Voluptates sint vitae distinctio eligendi consequuntur recusandae,
          similique quibusdam repellendus cumque necessitatibus, adipisci
          impedit ratione dolor quia maxime inventore reprehenderit. Natus velit
          minus porro architecto omnis ipsam deserunt. Adipisci distinctio dicta
          recusandae error mollitia eum culpa omnis tempora nemo ratione?
        </p>
      </div>
    </div>
  );
}
