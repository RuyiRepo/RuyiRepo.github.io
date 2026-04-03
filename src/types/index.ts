export interface FeedbackItem {
  label: string
  value: string
  url?: string
}

export interface Feedback {
  title: string
  note?: string
  closing?: string
  items: FeedbackItem[]
}

export interface PypiI18n {
  repoAddressLabel: string
  usageExampleTitle: string
  supportedTitle: string
  columns: {
    package: string
    version: string
    abi: string
  }
}

export interface ServicesI18n {
  pypi: PypiI18n
}

export interface I18nData {
  intro: {
    title: string
    paragraphs: string[]
  }
  servicesTitle: string
  feedback: Feedback
  services: ServicesI18n
}

// --- JSON data types ---

export interface SupportedSoftwareItem {
  name: string
  version: string
  /** Python wheel ABI 标签，如 cp310、cp311 */
  abi: string[]
}

export interface PypiJsonData {
  supportedSoftware: SupportedSoftwareItem[]
}
