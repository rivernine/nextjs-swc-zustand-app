export default function Footer() {
  return (
    <section className="flex flex-col justify-center items-center h-40 w-full bg-gray border-t-2 border-t-[#999] gap-4">
      <article className="flex flex-col">
        <p className="text-white font-light text-sm text-center">
          Contact. sample@gmail.com
        </p>
      </article>
      <div className='text-white font-regular text-sm'>
        © 2023 ∙ <a href='#' className="hover:cursor-pointer hover:text-sub transition-all duration-300">Sample. </a> All rights reserved
      </div>
    </section>
  )
}