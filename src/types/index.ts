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
  updatedAtLabel: string
  emptyState: string
  columns: {
    package: string
    version: string
    abi: string
    platform: string
  }
}

export interface ServicesI18n {
  title: string
  pypi: PypiI18n
}

export interface I18nData {
  intro: {
    title: string
    paragraphs: string[]
  }
  seo: {
    /** 首页 &lt;title&gt; 与 og:title，建议约 60 字符内 */
    title: string
    /** 首页 meta description 与 Open Graph，建议约 150 字符内 */
    description: string
  }
  feedback: Feedback
  services: ServicesI18n
}

// --- JSON data types ---

export interface SupportedSoftwareItem {
  name: string
  version: string[]
  abi: string[]
  platform: string
}

export type SupportedSoftwareByArch = Record<string, SupportedSoftwareItem[]>

export interface PypiJsonData {
  updated_at?: string
  supportedSoftware: SupportedSoftwareByArch
}
