import Heading from '../../../../components/ui/headings'

interface FooterDetails {
  phone?: React.ReactNode
  email?: React.ReactNode
  location: React.ReactNode
}
const Footercontact = ({ phone, email, location }: FooterDetails) => {
  const createGoogleMapsLink = location => {
    const encodedLocation = encodeURIComponent(location).replace(/(<([^>]+)>)/gi, '')
    return `https://www.google.com/maps?q=${encodedLocation}`
  }
  return (
    <div className="flex flex-col justify-between md:h-full">
      <div>
        <Heading level={6} spanText="Phone" className="font-900 uppercase md:mb-4 mb-2"></Heading>
        {phone && (
          <div className="md:mb-0 mb-6">
            <a href={`tel:${phone}`} className=" hover:text-strong-orange">
              {phone}
            </a>
          </div>
        )}
      </div>
      <div>
        <Heading level={6} spanText="Email" className="font-900 uppercase md:mb-4 mb-2"></Heading>
        {email && (
          <div className="md:mb-0 mb-6">
            <a href={`mailto:${email}`} className=" hover:text-strong-orange">
              {email}
            </a>
          </div>
        )}
      </div>
      <div>
        <Heading
          level={6}
          spanText="Location"
          className="font-900 uppercase md:mb-4 mb-2"
        ></Heading>
        {location && (
          <div className="md:mb-0 mb-6 max-w-[210px]">
            <a
              href={createGoogleMapsLink(location)}
              target="_blank"
              className="whitespace-pre-wrap hover:text-strong-orange"
            >
              <div dangerouslySetInnerHTML={{ __html: location }} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Footercontact
