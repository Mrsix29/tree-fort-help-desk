/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHelpDeskSection = /* GraphQL */ `
  mutation CreateHelpDeskSection(
    $input: CreateHelpDeskSectionInput!
    $condition: ModelHelpDeskSectionConditionInput
  ) {
    createHelpDeskSection(input: $input, condition: $condition) {
      id
      sectionName
      sectionLogo
      sectionLink
      sectionDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateHelpDeskSection = /* GraphQL */ `
  mutation UpdateHelpDeskSection(
    $input: UpdateHelpDeskSectionInput!
    $condition: ModelHelpDeskSectionConditionInput
  ) {
    updateHelpDeskSection(input: $input, condition: $condition) {
      id
      sectionName
      sectionLogo
      sectionLink
      sectionDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteHelpDeskSection = /* GraphQL */ `
  mutation DeleteHelpDeskSection(
    $input: DeleteHelpDeskSectionInput!
    $condition: ModelHelpDeskSectionConditionInput
  ) {
    deleteHelpDeskSection(input: $input, condition: $condition) {
      id
      sectionName
      sectionLogo
      sectionLink
      sectionDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPopularItemType = /* GraphQL */ `
  mutation CreatePopularItemType(
    $input: CreatePopularItemTypeInput!
    $condition: ModelPopularItemTypeConditionInput
  ) {
    createPopularItemType(input: $input, condition: $condition) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
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
export const updatePopularItemType = /* GraphQL */ `
  mutation UpdatePopularItemType(
    $input: UpdatePopularItemTypeInput!
    $condition: ModelPopularItemTypeConditionInput
  ) {
    updatePopularItemType(input: $input, condition: $condition) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
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
export const deletePopularItemType = /* GraphQL */ `
  mutation DeletePopularItemType(
    $input: DeletePopularItemTypeInput!
    $condition: ModelPopularItemTypeConditionInput
  ) {
    deletePopularItemType(input: $input, condition: $condition) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
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
export const createPopularUrl = /* GraphQL */ `
  mutation CreatePopularUrl(
    $input: CreatePopularUrlInput!
    $condition: ModelPopularUrlConditionInput
  ) {
    createPopularUrl(input: $input, condition: $condition) {
      id
      url
      urlName
      popularItemTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePopularUrl = /* GraphQL */ `
  mutation UpdatePopularUrl(
    $input: UpdatePopularUrlInput!
    $condition: ModelPopularUrlConditionInput
  ) {
    updatePopularUrl(input: $input, condition: $condition) {
      id
      url
      urlName
      popularItemTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePopularUrl = /* GraphQL */ `
  mutation DeletePopularUrl(
    $input: DeletePopularUrlInput!
    $condition: ModelPopularUrlConditionInput
  ) {
    deletePopularUrl(input: $input, condition: $condition) {
      id
      url
      urlName
      popularItemTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTestPopularItemType = /* GraphQL */ `
  mutation CreateTestPopularItemType(
    $input: CreateTestPopularItemTypeInput!
    $condition: ModelTestPopularItemTypeConditionInput
  ) {
    createTestPopularItemType(input: $input, condition: $condition) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTestPopularItemType = /* GraphQL */ `
  mutation UpdateTestPopularItemType(
    $input: UpdateTestPopularItemTypeInput!
    $condition: ModelTestPopularItemTypeConditionInput
  ) {
    updateTestPopularItemType(input: $input, condition: $condition) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTestPopularItemType = /* GraphQL */ `
  mutation DeleteTestPopularItemType(
    $input: DeleteTestPopularItemTypeInput!
    $condition: ModelTestPopularItemTypeConditionInput
  ) {
    deleteTestPopularItemType(input: $input, condition: $condition) {
      id
      popularType
      popularTypeLogo
      popularUrls {
        items {
          id
          url
          urlName
          popularItemTypeID
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTestPopularUrl = /* GraphQL */ `
  mutation CreateTestPopularUrl(
    $input: CreateTestPopularUrlInput!
    $condition: ModelTestPopularUrlConditionInput
  ) {
    createTestPopularUrl(input: $input, condition: $condition) {
      id
      url
      urlName
      popularItemTypeID
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTestPopularUrl = /* GraphQL */ `
  mutation UpdateTestPopularUrl(
    $input: UpdateTestPopularUrlInput!
    $condition: ModelTestPopularUrlConditionInput
  ) {
    updateTestPopularUrl(input: $input, condition: $condition) {
      id
      url
      urlName
      popularItemTypeID
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTestPopularUrl = /* GraphQL */ `
  mutation DeleteTestPopularUrl(
    $input: DeleteTestPopularUrlInput!
    $condition: ModelTestPopularUrlConditionInput
  ) {
    deleteTestPopularUrl(input: $input, condition: $condition) {
      id
      url
      urlName
      popularItemTypeID
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFAQType = /* GraphQL */ `
  mutation CreateFAQType(
    $input: CreateFAQTypeInput!
    $condition: ModelFAQTypeConditionInput
  ) {
    createFAQType(input: $input, condition: $condition) {
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
export const updateFAQType = /* GraphQL */ `
  mutation UpdateFAQType(
    $input: UpdateFAQTypeInput!
    $condition: ModelFAQTypeConditionInput
  ) {
    updateFAQType(input: $input, condition: $condition) {
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
export const deleteFAQType = /* GraphQL */ `
  mutation DeleteFAQType(
    $input: DeleteFAQTypeInput!
    $condition: ModelFAQTypeConditionInput
  ) {
    deleteFAQType(input: $input, condition: $condition) {
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
export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
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
export const updateFAQ = /* GraphQL */ `
  mutation UpdateFAQ(
    $input: UpdateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    updateFAQ(input: $input, condition: $condition) {
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
export const deleteFAQ = /* GraphQL */ `
  mutation DeleteFAQ(
    $input: DeleteFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    deleteFAQ(input: $input, condition: $condition) {
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
export const createDocType = /* GraphQL */ `
  mutation CreateDocType(
    $input: CreateDocTypeInput!
    $condition: ModelDocTypeConditionInput
  ) {
    createDocType(input: $input, condition: $condition) {
      id
      docType
      docLogo
      urlLogo
      docs {
        items {
          id
          url
          urlName
          docTypeID
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
export const updateDocType = /* GraphQL */ `
  mutation UpdateDocType(
    $input: UpdateDocTypeInput!
    $condition: ModelDocTypeConditionInput
  ) {
    updateDocType(input: $input, condition: $condition) {
      id
      docType
      docLogo
      urlLogo
      docs {
        items {
          id
          url
          urlName
          docTypeID
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
export const deleteDocType = /* GraphQL */ `
  mutation DeleteDocType(
    $input: DeleteDocTypeInput!
    $condition: ModelDocTypeConditionInput
  ) {
    deleteDocType(input: $input, condition: $condition) {
      id
      docType
      docLogo
      urlLogo
      docs {
        items {
          id
          url
          urlName
          docTypeID
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
export const createDoc = /* GraphQL */ `
  mutation CreateDoc(
    $input: CreateDocInput!
    $condition: ModelDocConditionInput
  ) {
    createDoc(input: $input, condition: $condition) {
      id
      url
      urlName
      docTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDoc = /* GraphQL */ `
  mutation UpdateDoc(
    $input: UpdateDocInput!
    $condition: ModelDocConditionInput
  ) {
    updateDoc(input: $input, condition: $condition) {
      id
      url
      urlName
      docTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDoc = /* GraphQL */ `
  mutation DeleteDoc(
    $input: DeleteDocInput!
    $condition: ModelDocConditionInput
  ) {
    deleteDoc(input: $input, condition: $condition) {
      id
      url
      urlName
      docTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createResourceType = /* GraphQL */ `
  mutation CreateResourceType(
    $input: CreateResourceTypeInput!
    $condition: ModelResourceTypeConditionInput
  ) {
    createResourceType(input: $input, condition: $condition) {
      id
      resourceType
      resourceLogo
      urlLogo
      resources {
        items {
          id
          url
          urlName
          resourceTypeID
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
export const updateResourceType = /* GraphQL */ `
  mutation UpdateResourceType(
    $input: UpdateResourceTypeInput!
    $condition: ModelResourceTypeConditionInput
  ) {
    updateResourceType(input: $input, condition: $condition) {
      id
      resourceType
      resourceLogo
      urlLogo
      resources {
        items {
          id
          url
          urlName
          resourceTypeID
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
export const deleteResourceType = /* GraphQL */ `
  mutation DeleteResourceType(
    $input: DeleteResourceTypeInput!
    $condition: ModelResourceTypeConditionInput
  ) {
    deleteResourceType(input: $input, condition: $condition) {
      id
      resourceType
      resourceLogo
      urlLogo
      resources {
        items {
          id
          url
          urlName
          resourceTypeID
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
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      id
      url
      urlName
      resourceTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
      id
      url
      urlName
      resourceTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      id
      url
      urlName
      resourceTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSupportRequestForm = /* GraphQL */ `
  mutation CreateSupportRequestForm(
    $input: CreateSupportRequestFormInput!
    $condition: ModelSupportRequestFormConditionInput
  ) {
    createSupportRequestForm(input: $input, condition: $condition) {
      id
      lname
      fname
      email
      phone
      message
      attachment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSupportRequestForm = /* GraphQL */ `
  mutation UpdateSupportRequestForm(
    $input: UpdateSupportRequestFormInput!
    $condition: ModelSupportRequestFormConditionInput
  ) {
    updateSupportRequestForm(input: $input, condition: $condition) {
      id
      lname
      fname
      email
      phone
      message
      attachment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSupportRequestForm = /* GraphQL */ `
  mutation DeleteSupportRequestForm(
    $input: DeleteSupportRequestFormInput!
    $condition: ModelSupportRequestFormConditionInput
  ) {
    deleteSupportRequestForm(input: $input, condition: $condition) {
      id
      lname
      fname
      email
      phone
      message
      attachment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
