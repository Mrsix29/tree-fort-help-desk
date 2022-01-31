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
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFAQ = /* GraphQL */ `
  subscription OnCreateFAQ {
    onCreateFAQ {
      id
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFAQ = /* GraphQL */ `
  subscription OnUpdateFAQ {
    onUpdateFAQ {
      id
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFAQ = /* GraphQL */ `
  subscription OnDeleteFAQ {
    onDeleteFAQ {
      id
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
