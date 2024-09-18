'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

// -------------------------------------Subscription form component for Newsletter feature ---------------------------------------------------------
export const Subscription = (open: boolean) => {
  const [opened, setOpened] = useState<boolean>(open)

  const handlePaidSubscribe = (event: React.FormEvent) => {
    event.preventDefault()
    // Reach api endpoint to submit paid subscription.
    // Save user details subscription to database.
    // Need doc to store sensitives data in db
    console.log('Paid subscription submitted')
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpened(!open)}>
      <DialogTrigger asChild>
        <Button>Subscribe to Premium</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Premium Newsletter Subscription</DialogTitle>
          <DialogDescription>
            Sign up for our premium newsletter to receive exclusive content and
            expert insights.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlePaidSubscribe} className='space-y-4'>
          <div>
            <label htmlFor='paid-email'>Email</label>
            <Input
              type='email'
              id='paid-email'
              placeholder='your@email.com'
              required
            />
          </div>
          <div>
            <label htmlFor='paid-name'>Name</label>
            <Input
              type='text'
              id='paid-name'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor='paid-card'>Card Number</label>
            <Input
              type='text'
              id='paid-card'
              placeholder='1234 5678 9012 3456'
              required
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor='paid-expiry'>Expiry Date</label>
              <Input
                type='text'
                id='paid-expiry'
                placeholder='MM/YY'
                required
              />
            </div>
            <div>
              <label htmlFor='paid-cvc'>CVC</label>
              <Input type='text' id='paid-cvc' placeholder='123' required />
            </div>
          </div>
          <Button type='submit' className='w-full'>
            Subscribe and Pay
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Subscription
