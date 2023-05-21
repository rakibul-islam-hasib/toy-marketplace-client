import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = ' Zooming Wheels | Blog '
    }, [])
    return (
        <div className='mb-24'>
            <div class="mx-auto mb-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mb-16 lg:mb-20 lg:px-8 ">
                <div class="text-center ">
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">

                        <div class="mt-2">
                            <span class="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                                class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                                preserveAspectRatio="none">
                                <path
                                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                                </path>
                            </svg>
                                <span class="relative">BLOG </span>
                            </span>
                        </div>
                    </h1>
                    <p class="mx-auto mt-12 max-w-xl text-lg text-gray-500">
                        Here are some of my blogs that I have written on question on provide in the task description. I hope you will find them useful.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto lg:grid-cols-3 gap-4">
                {/* Blog 1  */}
                <div className="bg-gray-100 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-500">
                            <h1 className='font-bold text-black'>Access Token</h1>
                            <p> Access token is a credential that is issued by an authentication server or  a identity provider after a user successfully authenticates their identity. A access token have a expiration limit . If it is expire then the user can not get the data from server side . </p>

                            <h1 className='font-bold mt-2 text-black'>Refresh Token</h1>
                            <p>When we use JWT web token for our project . Then we get two token one is access token and refresh token . If access token is expire then refresh token regenerate  a access token .  </p>
                        </span>
                    </div>
                </div>
                {/* Blog 2  */}
                <div className="bg-gray-100 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-500">
                            <h1 className='font-bold text-black'>SQL Database</h1>
                            <p>In SQL database  it is use  tabular format  for database . It is suitable for applications with complex and strict data requirement . </p>

                            <h1 className='font-bold mt-2 text-black'>NoSQL Database</h1>
                            <p>NoSQL database is offer us a flexible data model, supporting various models like key-value or document. Like JSON data . It provide flexibility and use different query languages. </p>
                        </span>
                    </div>
                </div>
                {/* Blog 3  */}
                <div className="bg-gray-100 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">What is express js? What is Nest JS ? </h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-500">
                            <h1 className='font-bold text-black'>Express js </h1>
                            <p>Express Js is a Javascript framework that use for server side  with node js . It is minimalist and flexible web application framework for Node.js </p>

                            <h1 className='font-bold mt-2 text-black'>Nest js</h1>
                            <p>Nest.js is a progressive framework for building efficient and scalable server-side applications with Node.js.   It built with type script . Nest.js is a more opinionated and feature-rich framework that follows Angular-inspired patterns. </p>
                        </span>
                    </div>
                </div>
                {/* Blog 4  */}
                <div className="bg-gray-100 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold">What is MongoDB aggregate and how does it work ?  </h1>
                    <div className="mt-3 border-t-2 pt-7">
                        <span className="text-gray-500">
                            <p>
                                In MongoDB , it is a powerfull tools for performing advanced data processing and analysis. It allow us  to execute complex queries and transformations on data store in MongoDB database  collection.
                            </p>
                            <p className='mt-6'>
                                The MongoDB aggregate function processes data in stages, where each stage performs a specific operation on the data. Stages can include filtering, grouping, sorting, and aggregating. The result is a transformed dataset that can be further analyzed or manipulated.
                            </p>
                        </span>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blog;