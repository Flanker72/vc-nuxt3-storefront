<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header Top -->
    <div class="border-t-4 border-yellow-500 bg-white py-2 text-xs">
      <div class="container mx-auto flex w-4/5">
        <div class="flex flex-grow font-medium">
          <a href="#" class="text-blue-600 hover:text-blue-800">My Account</a>
          <div class="mx-2 border-r border-gray-200"></div>
          <a href="#" class="text-blue-600 hover:text-blue-800">Order History</a>
          <div class="mx-2 border-r border-gray-200"></div>
          <a href="#" class="text-blue-600 hover:text-blue-800">Lists</a>
        </div>
        <div class="space-x-3 font-medium">
          <a href="#" class="text-blue-600 hover:text-blue-800 uppercase">Sign In</a>
          <a href="#" class="text-blue-600 hover:text-blue-800 uppercase">Register Now</a>
        </div>
      </div>
    </div>

    <!-- Header Middle -->
    <div class="bg-gray-900 py-5">
      <div class="container mx-auto flex items-center justify-between w-4/5">
        <img src="/img/b2b-promo-logo.png" class="h-8"/>
        <div class="space-x-3 text-sm font-medium">
          <a href="#" class="text-white">General Catalogue</a>
          <a href="#" class="text-white">Find a Branch</a>
          <a href="#" class="text-white">Contact Us</a>
        </div>
      </div>
    </div>

    <!-- Header Bottom -->
    <div class="bg-gray-800 border-b border-gray-800">
      <div class="container mx-auto flex justify-between items-stretch text-sm w-4/5">
        <div class="hover:bg-gray-100 hover:text-gray-900 text-white uppercase cursor-pointer px-4 py-4">All products</div>
        <div class="flex flex-grow">
          <input type="text" placeholder="Enter keyword, item, model or replacement part number." class="bg-white px-4 py-4 border-0 flex-grow outline-none"/>
          <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-4 border-0 text-white uppercase font-bold">Search</button>
        </div>
        <div class="hover:bg-gray-100 hover:text-gray-900 text-white uppercase cursor-pointer px-4 py-4">Bulk Order Pad</div>
        <div class="hover:bg-gray-100 hover:text-gray-900 text-white uppercase cursor-pointer px-4 py-4">Cart</div>
      </div>
    </div>

    <!-- Page content -->
    <div class="flex-grow">
      <div class="container mx-auto w-4/5 py-5">
        <div class="flex space-x-5">
          <div class="w-1/3">
            <div class="border border-gray-300 rounded-md overflow-hidden mb-4">
              <div class="bg-gray-100 font-bold uppercase px-4 py-3 border-b border-gray-300">Sign In</div>
              <div class="px-4 py-3 bg-white">
                <div class="mb-3">
                  <input type="text" placeholder="User Name" class="border border-gray-300 px-4 py-1 w-full" />
                </div>
                <div class="mb-3">
                  <input type="password" placeholder="Password" class="border border-gray-300 px-4 py-1 w-full" />
                </div>
                <a href="" class="text-blue-500 hover:text-blue-700 text-sm font-medium">Forgot your password?</a>
                <div class="flex space-x-7 mt-3">
                  <button class="bg-yellow-500 hover:bg-yellow-600 uppercase font-bold rounded-md text-white px-10 py-2 text-sm">Sign In</button>
                  <button class="border-2 border-yellow-500 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 uppercase font-bold rounded-md text-yellow-500 px-10 py-2 text-sm">Register</button>
                </div>
              </div>
            </div>

            <div class="border border-gray-300 rounded-md overflow-hidden mb-4">
              <div class="px-4 py-3 bg-white flex space-x-3">
                <img src="/img/book.svg"/>
                <div class="text-sm">Please <a href="" class="text-blue-500 hover:text-blue-700 font-medium">follow the link to access the B2B</a> demo portal credentials</div>
              </div>
            </div>

            <div class="border border-gray-300 rounded-md overflow-hidden mb-4">
              <div class="bg-gray-100 font-bold uppercase px-4 py-3 border-b border-gray-300">Subscribe Now!</div>
              <div class="px-4 py-3 bg-white">
                <div class="text-sm">Your connection to what's new at B2B-store.</div>
                <div class="flex flex-grow mt-2">
                  <input type="text" placeholder="Email Address" class="bg-white px-4 py-2 border border-gray-300 border-r-0 flex-grow outline-none text-sm"/>
                  <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 border-0 text-white uppercase font-bold text-sm">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/3">
            <img src="/img/main-page-pic.png"/>
          </div>
        </div>

        <div class="text-center font-bold uppercase text-xl mt-5 mb-8">PROFESSIONAL PURCHASES HAVE NEVER BEEN THAT EASY</div>

        <div class="flex justify-around mb-10">
          <div class="text-center text-sm font-bold">
            <img src="/img/main-ico-corp.svg"/>
            <div class="mt-3">Corporate account<br/>management</div>
          </div>
          <div class="text-center text-sm font-bold">
            <img src="/img/main-ico-price.svg"/>
            <div class="mt-3">Quote management price<br/>negotiation</div>
          </div>
          <div class="text-center text-sm font-bold">
            <img src="/img/main-ico-shop.svg"/>
            <div class="mt-3">Multiple stores, channels<br/>and regions</div>
          </div>
          <div class="text-center text-sm font-bold">
            <img src="/img/main-ico-calc.svg"/>
            <div class="mt-3">B2B personalization and price<br/>management</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Top -->
    <div class="border-t-4 border-gray-900 pt-5 pb-8">
      <div class="container mx-auto w-3/5">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <div class="uppercase text-black text-l font-bold mb-3">Company Information</div>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">About Us</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Investor Relations</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Supplier Overview</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Worldwide</a>
          </div>
          <div class="flex flex-col">
            <div class="uppercase text-black text-l font-bold mb-3">Customer Support</div>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Catalog Request</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Contact Us</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Feedback</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Find a Branch</a>
          </div>
          <div class="flex flex-col">
            <div class="uppercase text-black text-l font-bold mb-3">Order Support</div>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Orders</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Pick-Up</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Auto-Reorder</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Returns &amp; Cancellations</a>
          </div>
          <div class="flex flex-col">
            <div class="uppercase text-black text-l font-bold mb-3">Online Resources</div>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Catalog</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Hot Buys</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Rebates</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Replacement Parts</a>
            <a href="#" class="text-blue-700 hover:text-blue-900 text-sm font-medium">Today's features</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-gray-900 text-white text-sm text-center p-4">
      <div>© 2021 VirtoCommerce. All Rights Reserved.</div>
      <div>
        <a href="https://virtocommerce.com/b2b-ecommerce-platform" class="text-indigo-500 hover:text-indigo-700">B2B ecommerce platform</a> by Virto Commerce
      </div>
    </div>
  </div>
</template>
