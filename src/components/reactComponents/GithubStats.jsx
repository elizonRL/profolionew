import TitleHeader from '../TitleHeader.astro';

const GithubStats = () => {
  const username = import.meta.env.USER_NAME; // Replace with your GitHub username
  return (
    <>
      <section className='flex flex-col items-center w-full h-auto text-white py-8 px-20 md:px-12 text-wrap font-extralight'>
         <div className='w-full md:w-1/2'>
      
        <div className='grid grid-cols-5 grid-rows-5 gap-4'>
          <div className='col-span-2 row-span-2'>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
              alt='GitHub Stats'
              loading='lazy'
            />
          </div>
          <div className='col-span-2 row-span-3 col-start-3'>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
              alt='Lenguajes más usados'
              loading='lazy'
              className='object-cover object-top w-full h-auto'
            />
          </div>
          <div className='col-span-2 row-span-3 row-start-3'>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical`}
              alt='GitHub Streak Stats'
              loading='lazy'
            />
          </div>
        </div>
         </div>
      </section>
    </>
  );
};

export default GithubStats;
