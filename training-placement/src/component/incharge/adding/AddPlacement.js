import React,{useEffect} from 'react'

export default function AddPlacement() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Adding Placement Drive</h2>

      </div>
   
    <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

      <div class="sm:col-span-2">
        <label for="Title" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Title*</label>
        <input name="Title" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

    
      <div>
        <label for="StartingDate" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Starting Date*</label>
        <input name="StartingDate" type="date" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="EndingDate" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Ending Date*</label>
        <input name="EndingDate" type="date" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="image" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Image</label>
        <input name="image" type = "file" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="description" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Description*</label>
        <textarea name="description" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div class="flex items-center justify-between sm:col-span-2">
        <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

        <span class="text-sm text-gray-500">*Required</span>
      </div>

     </form>

  </div>
</div>
    </div>
  )
}
