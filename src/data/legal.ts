import type { LegalPageContent } from '@/types/content.ts'

export const legalNotice =
  'This page contains general website language provided as a starting point. Have it reviewed by a qualified attorney before final publication.'

export const legalPages: readonly LegalPageContent[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    intro:
      'This policy describes how the Vibe Virtue website handles information when you visit or contact us.',
    sections: [
      {
        heading: 'What this website does not use',
        paragraphs: [
          'The current website is a static informational site. It does not intentionally use:',
        ],
        items: [
          'User accounts',
          'A database',
          'Payment processing',
          'A contact form',
          'Advertising cookies',
        ],
      },
      {
        heading: 'Contacting us by email',
        paragraphs: [
          'Clicking an email link on this website opens your own email application. The website itself does not send, receive, or store messages.',
          'Any information you include in an email is voluntarily provided by you. Please share only the details you are comfortable sending.',
        ],
      },
      {
        heading: 'Fonts and hosting',
        paragraphs: [
          'This website loads fonts from Google Fonts, which means your browser requests those font files directly from Google servers when the page loads.',
          'Like most websites, the hosting provider that serves this site may keep standard technical server logs.',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'If the website adds features that change how information is handled, this policy will be updated before or alongside those changes.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about this policy can be sent to anthony@vibevirtue.com.',
        ],
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms and Conditions',
    intro:
      'These terms govern your use of the Vibe Virtue website. By using the website, you agree to them.',
    sections: [
      {
        heading: 'Website use',
        paragraphs: [
          'You may use this website for lawful, personal, and business-evaluation purposes. You agree not to interfere with the operation or security of the website.',
        ],
      },
      {
        heading: 'Informational content',
        paragraphs: [
          'Content on this website is provided for general informational purposes. It may change at any time without notice, and no guarantee is made that it is complete or current.',
        ],
      },
      {
        heading: 'Intellectual property',
        paragraphs: [
          'The website content, including text, branding, and design, belongs to Vibe Virtue unless otherwise noted. You may not reproduce or redistribute it without permission, except as allowed by law.',
        ],
      },
      {
        heading: 'Prohibited conduct',
        paragraphs: [
          'You agree not to misuse the website, including attempting unauthorized access, scraping at disruptive volume, transmitting malicious code, or using the site to send unlawful or deceptive communications.',
        ],
      },
      {
        heading: 'Third-party links',
        paragraphs: [
          'The website may link to third-party sites or services. Vibe Virtue does not control them and is not responsible for their content, policies, or practices.',
        ],
      },
      {
        heading: 'Limitation of liability',
        paragraphs: [
          'To the fullest extent permitted by law, Vibe Virtue is not liable for damages arising from your use of, or inability to use, this website or its content.',
        ],
      },
      {
        heading: 'Changes to these terms',
        paragraphs: [
          'These terms may be updated from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.',
        ],
      },
      {
        heading: 'Contact information',
        paragraphs: [
          'Questions about these terms can be sent to anthony@vibevirtue.com.',
        ],
      },
    ],
  },
  {
    slug: 'consulting-disclaimer',
    title: 'Consulting Disclaimer',
    intro:
      'Please read this disclaimer before relying on any information from this website or requesting consulting services.',
    sections: [
      {
        heading: 'General information only',
        paragraphs: [
          'Information on this website is general in nature and is provided for informational purposes.',
          'Website content is not legal, tax, accounting, investment, medical, or financial advice. For advice in those areas, consult an appropriately licensed professional.',
        ],
      },
      {
        heading: 'No automatic consulting relationship',
        paragraphs: [
          'Sending an email inquiry does not automatically create a consultant-client relationship.',
          'A consulting relationship begins only after the scope of work, fees, and terms are agreed upon.',
        ],
      },
      {
        heading: 'No guaranteed outcomes',
        paragraphs: [
          'Outcomes are not guaranteed. Vibe Virtue provides professional recommendations, but client results depend on execution, market conditions, and other external factors outside of Vibe Virtue’s control.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about this disclaimer can be sent to anthony@vibevirtue.com.',
        ],
      },
    ],
  },
]
