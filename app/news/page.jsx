'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import { Divider } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import CardLoader from '@/components/ui/cardLoader'
import { CardLoaders, NewsCardSkeleton } from '@/components/ui/cardload'

const NewsAll = () => {
  const [allnewsData, setAllNewsData] = useState()
  const [loader, setLoader] = useState()

  useEffect(() => {
    setLoader(true)
    fetch('https://api.discoverinternationalmedicalservice.com/api/get/news')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setAllNewsData(data?.data)
          setLoader(false)
        } else {
          setLoader(false)
        }
      })
  }, [])
  return (
    <div className='p-5 md:p-10 md:container md:mx-auto'>
      <div className=''>
        <h1 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
          Bumrungrad News
        </h1>
        <div className='my-5'>
          <Divider />
        </div>
      </div>
      {loader ? (
        <CardLoaders Component={NewsCardSkeleton} cardLength={15} gridNumber={3} speed='slow' />
      ) : (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>
          {allnewsData?.map((d, i) => (
            <div
              key={i}
              className='shadow rounded hover:shadow-xl duration-300 ease-linear flex flex-col justify-between'
            >
              <Image
                height={300}
                width={1000}
                src={d.newsImage}
                alt='Bumrungrad International Hospital'
                className='w-full h-[200px] object-cover'
              />
              <div className='p-4'>
                {' '}
                <h5 className='font-semibold text-blue text-lg'>
                  {d.newsTitle}
                </h5>
                <p className='my-3 text-justify'>
                  {d.newsDescription?.slice(0, 160)} ...
                </p>
              </div>
              <div className='p-4'>
                <Link href={`/news/${d?.id}`}>
                  <button className='border border-blue bg-blue hover:bg-white px-2 py-1 rounded hover:text-blue text-white duration-300 ease-linear'>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}




export default NewsAll
