/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFAQType = /* GraphQL */ `
  subscription OnCreateFAQType {
    onCreateFAQType {
      id
      faqType
      faqs {
        items {
          id
          question
          answer
          createdAt
          updatedAt
          fAQTypeFaqsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFAQType = /* GraphQL */ `
  subscription OnUpdateFAQType {
    onUpdateFAQType {
      id
      faqType
      faqs {
        items {
          id
          question
          answer
          createdAt
          updatedAt
          fAQTypeFaqsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFAQType = /* GraphQL */ `
  subscription OnDeleteFAQType {
    onDeleteFAQType {
      id
      faqType
      faqs {
        items {
          id
          question
          answer
          createdAt
          updatedAt
          fAQTypeFaqsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFAQ = /* GraphQL */ `
  subscription OnCreateFAQ {
    onCreateFAQ {
      id
      faqType {
        id
        faqType
        faqs {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      answer
      createdAt
      updatedAt
      fAQTypeFaqsId
    }
  }
`;
export const onUpdateFAQ = /* GraphQL */ `
  subscription OnUpdateFAQ {
    onUpdateFAQ {
      id
      faqType {
        id
        faqType
        faqs {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      answer
      createdAt
      updatedAt
      fAQTypeFaqsId
    }
  }
`;
export const onDeleteFAQ = /* GraphQL */ `
  subscription OnDeleteFAQ {
    onDeleteFAQ {
      id
      faqType {
        id
        faqType
        faqs {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      answer
      createdAt
      updatedAt
      fAQTypeFaqsId
    }
  }
`;
