const dict = {
  _definitions: {
    UUID: {
      pattern:
        "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
      term: {
        description:
          "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
        termDef: {
          cde_id: "C54100",
          cde_version: null,
          source: "NCIt",
          term: "Universally Unique Identifier",
          term_url:
            "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
        }
      },
      type: "string"
    },
    data_bundle_state: {
      default: "submitted",
      description: "State of a data bundle.",
      enum: [
        "submitted",
        "validated",
        "error",
        "released",
        "suppressed",
        "redacted"
      ]
    },
    data_file_error_type: {
      enum: ["file_size", "file_format", "md5sum"],
      term: { description: "Type of error for the data file object.\n" }
    },
    data_file_properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    datetime: {
      oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
      term: {
        description:
          "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
      }
    },
    file_format: { term: { $ref: "_terms.yaml#/file_format" }, type: "string" },
    file_name: {
      term: {
        description: "The name (or part of a name) of a file (of any type).\n"
      },
      type: "string"
    },
    file_size: {
      term: { description: "The size of the data file (object) in bytes.\n" },
      type: "integer"
    },
    file_state: {
      default: "registered",
      enum: [
        "registered",
        "uploading",
        "uploaded",
        "validating",
        "validated",
        "submitted",
        "processing",
        "processed",
        "released",
        "error"
      ],
      term: { description: "The current state of the data file object.\n" }
    },
    foreign_key: {
      additionalProperties: true,
      properties: {
        id: {
          pattern:
            "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
          term: {
            description:
              "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
            termDef: {
              cde_id: "C54100",
              cde_version: null,
              source: "NCIt",
              term: "Universally Unique Identifier",
              term_url:
                "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
            }
          },
          type: "string"
        },
        submitter_id: { type: "string" }
      },
      type: "object"
    },
    foreign_key_project: {
      additionalProperties: true,
      properties: {
        code: { type: "string" },
        id: {
          pattern:
            "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
          term: {
            description:
              "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
            termDef: {
              cde_id: "C54100",
              cde_version: null,
              source: "NCIt",
              term: "Universally Unique Identifier",
              term_url:
                "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
            }
          },
          type: "string"
        }
      },
      type: "object"
    },
    id: "_definitions",
    md5sum: {
      pattern: "^[a-f0-9]{32}$",
      term: {
        description:
          "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
      },
      type: "string"
    },
    object_id: {
      description: "The GUID of the object in the index service.",
      type: "string"
    },
    parent_uuids: {
      items: { $ref: "#/UUID" },
      minItems: 1,
      type: "array",
      uniqueItems: true
    },
    project_id: {
      term: {
        description:
          "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
      },
      type: "string"
    },
    qc_metrics_state: {
      enum: ["FAIL", "PASS", "WARN"],
      term: {
        description:
          "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
        termDef: {
          cde_id: null,
          cde_version: null,
          source: "FastQC",
          term: "QC Metric State",
          term_url:
            "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
        }
      }
    },
    release_state: {
      default: "unreleased",
      description: "Release state of an entity.",
      enum: ["unreleased", "released", "redacted"]
    },
    state: {
      default: "validated",
      downloadable: [
        "uploaded",
        "md5summed",
        "validating",
        "validated",
        "error",
        "invalid",
        "released"
      ],
      oneOf: [
        {
          enum: [
            "uploading",
            "uploaded",
            "md5summing",
            "md5summed",
            "validating",
            "error",
            "invalid",
            "suppressed",
            "redacted",
            "live"
          ]
        },
        { enum: ["validated", "submitted", "released"] }
      ],
      public: ["live"],
      term: { description: "The current state of the object.\n" }
    },
    to_many: {
      anyOf: [
        {
          items: {
            additionalProperties: true,
            minItems: 1,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          },
          type: "array"
        },
        {
          additionalProperties: true,
          properties: {
            id: {
              pattern:
                "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
              term: {
                description:
                  "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                termDef: {
                  cde_id: "C54100",
                  cde_version: null,
                  source: "NCIt",
                  term: "Universally Unique Identifier",
                  term_url:
                    "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                }
              },
              type: "string"
            },
            submitter_id: { type: "string" }
          },
          type: "object"
        }
      ]
    },
    to_many_project: {
      anyOf: [
        {
          items: {
            additionalProperties: true,
            minItems: 1,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          },
          type: "array"
        },
        {
          additionalProperties: true,
          properties: {
            code: { type: "string" },
            id: {
              pattern:
                "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
              term: {
                description:
                  "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                termDef: {
                  cde_id: "C54100",
                  cde_version: null,
                  source: "NCIt",
                  term: "Universally Unique Identifier",
                  term_url:
                    "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                }
              },
              type: "string"
            }
          },
          type: "object"
        }
      ]
    },
    to_one: {
      anyOf: [
        {
          items: {
            additionalProperties: true,
            maxItems: 1,
            minItems: 1,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          },
          type: "array"
        },
        {
          additionalProperties: true,
          properties: {
            id: {
              pattern:
                "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
              term: {
                description:
                  "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                termDef: {
                  cde_id: "C54100",
                  cde_version: null,
                  source: "NCIt",
                  term: "Universally Unique Identifier",
                  term_url:
                    "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                }
              },
              type: "string"
            },
            submitter_id: { type: "string" }
          },
          type: "object"
        }
      ]
    },
    to_one_project: {
      anyOf: [
        {
          items: {
            additionalProperties: true,
            maxItems: 1,
            minItems: 1,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          },
          type: "array"
        },
        {
          additionalProperties: true,
          properties: {
            code: { type: "string" },
            id: {
              pattern:
                "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
              term: {
                description:
                  "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                termDef: {
                  cde_id: "C54100",
                  cde_version: null,
                  source: "NCIt",
                  term: "Universally Unique Identifier",
                  term_url:
                    "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                }
              },
              type: "string"
            }
          },
          type: "object"
        }
      ]
    },
    ubiquitous_properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    workflow_properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    }
  },
  _settings: {
    _dict_commit: "04f5ec5f6c1ec24066fb6db7b65dbfea9f696e7c",
    _dict_version: "1.0",
    enable_case_cache: false
  },
  _terms: {
    "28s_16s_ribosomal_rna_ratio": {
      description:
        "The 28S/18S ribosomal RNA band ratio used to assess the quality of total RNA.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "28s/18s Ribosomal RNA Ratio",
        term_url: null
      }
    },
    RIN: {
      description:
        "A numerical assessment of the integrity of RNA based on the entire electrophoretic trace of the RNA sample including the presence or absence of degradation products.\n",
      termDef: {
        cde_id: 5278775,
        cde_version: 1.0,
        source: "caDSR",
        term: "Biospecimen RNA Integrity Number Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5278775&version=1.0"
      }
    },
    UUID: {
      description:
        "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
      termDef: {
        cde_id: "C54100",
        cde_version: null,
        source: "NCIt",
        term: "Universally Unique Identifier",
        term_url:
          "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
      }
    },
    a260_a280_ratio: {
      description:
        "Numeric value that represents the sample ratio of nucleic acid absorbance at 260 nm and 280 nm, used to determine a measure of DNA purity.\n",
      termDef: {
        cde_id: 5432595,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Nucleic Acid Absorbance at 260 And Absorbance at 280 DNA Purity Ratio Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432595&version=1.0"
      }
    },
    adapter_name: { description: "Name of the sequencing adapter.\n" },
    adapter_sequence: {
      description: "Base sequence of the sequencing adapter.\n"
    },
    age_at_diagnosis: {
      description:
        "Age at the time of diagnosis expressed in number of days since birth.\n",
      termDef: {
        cde_id: 3225640,
        cde_version: 2.0,
        source: "caDSR",
        term: "Patient Diagnosis Age Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3225640&version=2.0"
      }
    },
    ajcc_clinical_m: {
      description:
        "Extent of the distant metastasis for the cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.\n",
      termDef: {
        cde_id: 3440331,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Neoplasm American Joint Committee on Cancer Clinical Distant Metastasis M Stage",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3440331&version=1.0"
      }
    },
    ajcc_clinical_n: {
      description:
        "Extent of the regional lymph node involvement for the cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.\n",
      termDef: {
        cde_id: 3440330,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Neoplasm American Joint Committee on Cancer Clinical Regional Lymph Node N Stage",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3440330&version=1.0"
      }
    },
    ajcc_clinical_stage: {
      description:
        "Stage group determined from clinical information on the tumor (T), regional node (N) and metastases (M) and by grouping cases with similar prognosis for cancer.\n",
      termDef: {
        cde_id: 3440332,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Neoplasm American Joint Committee on Cancer Clinical Group Stage",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3440332&version=1.0"
      }
    },
    ajcc_clinical_t: {
      description:
        "Extent of the primary cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.\n",
      termDef: {
        cde_id: 3440328,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Neoplasm American Joint Committee on Cancer Clinical Primary Tumor T Stage",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3440328&version=1.0"
      }
    },
    ajcc_pathologic_m: {
      description:
        "Code to represent the defined absence or presence of distant spread or metastases (M) to locations via vascular channels or lymphatics beyond the regional lymph nodes, using criteria established by the American Joint Committee on Cancer (AJCC).\n",
      termDef: {
        cde_id: 3045439,
        cde_version: 1.0,
        source: "caDSR",
        term: "American Joint Committee on Cancer Metastasis Stage Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3045439&version=1.0"
      }
    },
    ajcc_pathologic_n: {
      description:
        "The codes that represent the stage of cancer based on the nodes present (N stage) according to criteria based on multiple editions of the AJCC's Cancer Staging Manual.\n",
      termDef: {
        cde_id: 3203106,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Neoplasm Disease Lymph Node Stage American Joint Committee on Cancer Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3203106&version=1.0"
      }
    },
    ajcc_pathologic_stage: {
      description:
        "The extent of a cancer, especially whether the disease has spread from the original site to other parts of the body based on AJCC staging criteria.\n",
      termDef: {
        cde_id: 3203222,
        cde_version: 1.0,
        source: "caDSR",
        term: "Neoplasm Disease Stage American Joint Committee on Cancer Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3203222&version=1.0"
      }
    },
    ajcc_pathologic_t: {
      description:
        "Code of pathological T (primary tumor) to define the size or contiguous extension of the primary tumor (T), using staging criteria from the American Joint Committee on Cancer (AJCC).\n",
      termDef: {
        cde_id: 3045435,
        cde_version: 1.0,
        source: "caDSR",
        term: "American Joint Committee on Cancer Tumor Stage Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3045435&version=1.0"
      }
    },
    alcohol_history: {
      description:
        "A response to a question that asks whether the participant has consumed at least 12 drinks of any kind of alcoholic beverage in their lifetime.\n",
      termDef: {
        cde_id: 2201918,
        cde_version: 1.0,
        source: "caDSR",
        term: "Alcohol Lifetime History Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2201918&version=1.0"
      }
    },
    alcohol_intensity: {
      description:
        "Category to describe the patient's current level of alcohol use as self-reported by the patient.\n",
      termDef: {
        cde_id: 3457767,
        cde_version: 1.0,
        source: "caDSR",
        term: "Person Self-Report Alcoholic Beverage Exposure Category",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3457767&version=1.0"
      }
    },
    aliquot_quantity: {
      description:
        "The quantity in micrograms (ug) of the aliquot(s) derived from the analyte(s) shipped for sequencing and characterization.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Biospecimen Aliquot Quantity",
        term_url: null
      }
    },
    aliquot_volume: {
      description:
        "The volume in microliters (ml) of the aliquot(s) derived from the analyte(s) shipped for sequencing and characterization.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Biospecimen Aliquot Volume",
        term_url: null
      }
    },
    amount: { description: "Weight in grams or volume in mL.\n" },
    analyte_quantity: {
      description:
        "The quantity in micrograms (ug) of the analyte(s) derived from the analyte(s) shipped for sequencing and characterization.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Biospecimen Analyte Quantity",
        term_url: null
      }
    },
    analyte_type: {
      description:
        "Text term that represents the kind of molecular specimen analyte.\n",
      termDef: {
        cde_id: 2513915,
        cde_version: 2.0,
        source: "caDSR",
        term: "Molecular Specimen Type Text Name",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2513915&version=2.0"
      }
    },
    analyte_type_id: {
      description:
        "A single letter code used to identify a type of molecular analyte.\n",
      termDef: {
        cde_id: 5432508,
        cde_version: 1.0,
        source: "caDSR",
        term: "Molecular Analyte Identification Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432508&version=1.0"
      }
    },
    analyte_volume: {
      description:
        "The volume in microliters (ml) of the analyte(s) derived from the analyte(s) shipped for sequencing and characterization.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Biospecimen Analyte Volume",
        term_url: null
      }
    },
    ann_arbor_b_symptoms: {
      description:
        "Text term to signify whether lymphoma B-symptoms are present as noted in the patient's medical record.\n",
      termDef: {
        cde_id: 2902402,
        cde_version: 1.0,
        source: "caDSR",
        term: "Lymphoma B-Symptoms Medical Record Documented Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2902402&version=1.0"
      }
    },
    ann_arbor_clinical_stage: {
      description:
        "The classification of the clinically confirmed anatomic disease extent of lymphoma (Hodgkin's and Non-Hodgkins) based on the Ann Arbor Staging System.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Ann Arbor Clinical Stage",
        term_url: null
      }
    },
    ann_arbor_extranodal_involvement: {
      description:
        "Indicator that identifies whether a patient with malignant lymphoma has lymphomatous involvement of an extranodal site.\n",
      termDef: {
        cde_id: 3364582,
        cde_version: 1.0,
        source: "caDSR",
        term: "Lymphomatous Extranodal Site Involvement Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3364582&version=1.0"
      }
    },
    ann_arbor_pathologic_stage: {
      description:
        "The classification of the pathologically confirmed anatomic disease extent of lymphoma (Hodgkin's and Non-Hodgkins) based on the Ann Arbor Staging System.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Ann Arbor Pathologic Stage",
        term_url: null
      }
    },
    ann_arbor_tumor_stage: {
      description:
        "The classification of the anatomic disease extent of lymphoma (Hodgkin's and Non-Hodgkins) based on the Ann Arbor Staging System.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Ann Arbor Tumor Stage",
        term_url: null
      }
    },
    base_caller_name: { description: "Name of the base caller.\n" },
    base_caller_version: { description: "Version of the base caller.\n" },
    biomarker_name: {
      description:
        "The name of the biomarker being tested for this specimen and set of test results.\n",
      termDef: {
        cde_id: 5473,
        cde_version: 11.0,
        source: "caDSR",
        term: "Biomarker Name",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5473&version=2.31"
      }
    },
    biomarker_result: {
      description: "Text term to define the results of genetic testing.\n",
      termDef: {
        cde_id: 3234680,
        cde_version: 1.0,
        source: "caDSR",
        term: "Laboratory Procedure Genetic Abnormality Test Result Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3234680&version=1.0"
      }
    },
    biomarker_test_method: {
      description:
        "Text descriptor of a molecular analysis method used for an individual.\n",
      termDef: {
        cde_id: 3121575,
        cde_version: 1.0,
        source: "caDSR",
        term: "Disease Detection Molecular Analysis Method Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3121575&version=1.0"
      }
    },
    biospecimen_anatomic_site: {
      description:
        "Text term that represents the name of the primary disease site of the submitted tumor sample.\n",
      termDef: {
        cde_id: 4742851,
        cde_version: 1.0,
        source: "caDSR",
        term: "Submitted Tumor Sample Primary Anatomic Site",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4742851&version=1.0"
      }
    },
    bmi: {
      description:
        "The body mass divided by the square of the body height expressed in units of kg/m^2.\n",
      termDef: {
        cde_id: 4973892,
        cde_version: 1.0,
        source: "caDSR",
        term: "Body Mass Index (BMI)",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4973892&version=1.0"
      }
    },
    breed: {
      description:
        "A stock of animals or plants within a species having a distinctive appearance and typically having been developed by deliberate selection.\n"
    },
    burkitt_lymphoma_clinical_variant: {
      description:
        "Burkitt's lymphoma categorization based on clinical features that differ from other forms of the same disease.\n",
      termDef: {
        cde_id: 3770421,
        cde_version: 1.0,
        source: "caDSR",
        term: "Burkitt Lymphoma Clinical Variant Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3770421&version=1.0"
      }
    },
    cause_of_death: {
      description: "Text term to identify the cause of death for a patient.\n",
      termDef: {
        cde_id: 2554674,
        cde_version: 3.0,
        source: "caDSR",
        term: "Patient Death Reason",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2554674&version=3.0"
      }
    },
    cea_level_preoperative: {
      description:
        "Numeric value of the Carcinoembryonic antigen or CEA at the time before surgery. [Manually- curated]\n",
      termDef: {
        cde_id: 2716510,
        cde_version: 1.0,
        source: "caDSR",
        term: "Preoperative Carcinoembryonic Antigen Result Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2716510&version=1.0"
      }
    },
    cigarettes_per_day: {
      description: "The average number of cigarettes smoked per day.\n",
      termDef: {
        cde_id: 2001716,
        cde_version: 4.0,
        source: "caDSR",
        term: "Smoking Use Average Number",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2001716&version=4.0"
      }
    },
    circumferential_resection_margin: {
      description:
        "A value in millimeters indicating the measured length between a malignant lesion of the colon or rectum and the nearest radial (or circumferential) border of tissue removed during cancer surgery.\n",
      termDef: {
        cde_id: 64202,
        cde_version: 3.0,
        source: "caDSR",
        term: "Colorectal Surgical Margin Circumferential Distance Measurement",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=64202&version=3.0"
      }
    },
    classification_of_tumor: {
      description:
        "Text that describes the kind of disease present in the tumor specimen as related to a specific timepoint.\n",
      termDef: {
        cde_id: 3288124,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tumor Tissue Disease Description Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3288124&version=1.0"
      }
    },
    colon_polyps_history: {
      description:
        "Yes/No indicator to describe if the subject had a previous history of colon polyps as noted in the history/physical or previous endoscopic report (s).\n",
      termDef: {
        cde_id: 3107197,
        cde_version: 1.0,
        source: "caDSR",
        term: "Colon Carcinoma Polyp Occurrence Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3107197&version=1.0"
      }
    },
    composition: {
      description:
        "Text term that represents the cellular composition of the sample.\n",
      termDef: {
        cde_id: 5432591,
        cde_version: 1.0,
        source: "caDSR",
        term: "Biospecimen Cellular Composition Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432591&version=1.0"
      }
    },
    concentration: {
      description:
        "Numeric value that represents the concentration of an analyte or aliquot extracted from the sample or sample portion, measured in milligrams per milliliter.\n",
      termDef: {
        cde_id: 5432594,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Biospecimen Analyte or Aliquot Extracted Concentration Milligram per Milliliter Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432594&version=1.0"
      }
    },
    creation_datetime: {
      description:
        "The datetime of portion creation encoded as seconds from epoch.\n",
      termDef: {
        cde_id: 5432592,
        cde_version: 1.0,
        source: "caDSR",
        term: "Biospecimen Portion Creation Seconds Date/Time",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432592&version=1.0"
      }
    },
    current_weight: {
      description:
        "Numeric value that represents the current weight of the sample, measured  in milligrams.\n",
      termDef: {
        cde_id: 5432606,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Current Weight Milligram Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432606&version=1.0"
      }
    },
    data_category: {
      description: "Broad categorization of the contents of the data file.\n"
    },
    data_file_error_type: {
      description: "Type of error for the data file object.\n"
    },
    data_format: { description: "Format of the data files.\n" },
    data_type: { description: "Specific content type of the data file.\n" },
    datetime: {
      description:
        "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
    },
    days_to_birth: {
      description:
        "Time interval from a person's date of birth to the date of initial pathologic diagnosis, represented as a calculated negative number of days.\n",
      termDef: {
        cde_id: 3008233,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Person Birth Date Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3008233&version=1.0"
      }
    },
    days_to_collection: {
      description:
        "Time interval from the date of biospecimen collection to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 3008340,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Biospecimen Collection Date Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3008340&version=1.0"
      }
    },
    days_to_death: {
      description:
        "Time interval from a person's date of death to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 3165475,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Death Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3165475&version=1.0"
      }
    },
    days_to_hiv_diagnosis: {
      description:
        "Time interval from the date of the initial pathologic diagnosis to the date of human immunodeficiency diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 4618491,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Human Immunodeficiency Virus Diagnosis Subtract Initial Pathologic Diagnosis Time Duration Day Calculation Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4618491&version=1.0"
      }
    },
    days_to_last_follow_up: {
      description:
        "Time interval from the date of last follow up to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 3008273,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Last Communication Contact Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3008273&version=1.0"
      }
    },
    days_to_last_known_disease_status: {
      description:
        "Time interval from the date of last follow up to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 3008273,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Last Communication Contact Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3008273&version=1.0"
      }
    },
    days_to_new_event: {
      description:
        "Time interval from the date of new tumor event including progression, recurrence and new primary malignacies to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 3392464,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "New Tumor Event Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3392464&version=1.0"
      }
    },
    days_to_recurrence: {
      description:
        "Time interval from the date of new tumor event including progression, recurrence and new primary malignancies to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 3392464,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "New Tumor Event Less Initial Pathologic Diagnosis Date Calculated Day Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3392464&version=1.0"
      }
    },
    days_to_sample_procurement: {
      description:
        "The number of days from the date the patient was diagnosed to the date of the procedure that produced the sample.\n"
    },
    days_to_treatment: {
      description:
        "Number of days from date of initial pathologic diagnosis that treatment began.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Days to Treatment Start",
        term_url: null
      }
    },
    days_to_treatment_end: {
      description:
        "Time interval from the date of the initial pathologic diagnosis to the date of treatment end, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 5102431,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Treatment End Subtract First Pathologic Diagnosis Day Calculation Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5102431&version=1.0"
      }
    },
    days_to_treatment_start: {
      description:
        "Time interval from the date of the initial pathologic diagnosis to the start of treatment, represented as a calculated number of days.\n",
      termDef: {
        cde_id: 5102411,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Treatment Start Subtract First Pathologic Diagnosis Time Day Calculation Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5102411&version=1.0"
      }
    },
    diagnosis_pathologically_confirmed: {
      description:
        "The histologic description of tissue or cells confirmed by a pathology review of frozen or formalin fixed slide(s) completed after the diagnostic pathology review of the tumor sample used to extract analyte(s).\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Post-Diagnostic Pathology Review Confirmation",
        term_url: null
      }
    },
    dlco_ref_predictive_percent: {
      description:
        "The value, as a percentage of predicted lung volume, measuring the amount of carbon monoxide detected in a patient's lungs.\n",
      termDef: {
        cde_id: 2180255,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Lung Carbon Monoxide Diffusing Capability Test Assessment Predictive Value Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2180255&version=1.0"
      }
    },
    encoding: {
      description:
        "Version of ASCII encoding of quality values found in the file.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: "FastQC",
        term: "Encoding",
        term_url:
          "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/1%20Basic%20Statistics.html"
      }
    },
    estrogen_receptor_percent_positive_ihc: {
      description:
        "Classification to represent ER Positive results expressed as a percentage value.\n",
      termDef: {
        cde_id: 3128341,
        cde_version: 1.0,
        source: "caDSR",
        term: "ER Level Cell Percentage Category",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3128341&version=1.0"
      }
    },
    estrogen_receptor_result_ihc: {
      description:
        "Text term to represent the overall result of Estrogen Receptor (ER) testing.\n",
      termDef: {
        cde_id: 2957359,
        cde_version: 2.0,
        source: "caDSR",
        term: "Breast Carcinoma Estrogen Receptor Status",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2957359&version=2.0"
      }
    },
    ethnicity: {
      description:
        "An individual's self-described social and cultural grouping, specifically whether an individual describes themselves as Hispanic or Latino. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau.\n",
      termDef: {
        cde_id: 2192217,
        cde_version: 2.0,
        source: "caDSR",
        term: "Ethnic Group Category Text",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2192217&version=2.0"
      }
    },
    experiment_name: {
      description: "Submitter-defined name for the experiment.\n"
    },
    experimental_strategy: {
      description: "The sequencing strategy used to generate the data file.\n"
    },
    fastq_name: { description: "Names of FASTQs.\n" },
    fev1_fvc_post_bronch_percent: {
      description:
        "Percentage value to represent result of Forced Expiratory Volume in 1 second (FEV1) divided by the Forced Vital Capacity (FVC) post-bronchodilator.\n",
      termDef: {
        cde_id: 3302956,
        cde_version: 1.0,
        source: "caDSR",
        term: "Post Bronchodilator FEV1/FVC Percent Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3302956&version=1.0"
      }
    },
    fev1_fvc_pre_bronch_percent: {
      description:
        "Percentage value to represent result of Forced Expiratory Volume in 1 second (FEV1) divided by the Forced Vital Capacity (FVC) pre-bronchodilator.\n",
      termDef: {
        cde_id: 3302955,
        cde_version: 1.0,
        source: "caDSR",
        term: "Pre Bronchodilator FEV1/FVC Percent Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3302955&version=1.0"
      }
    },
    fev1_ref_post_bronch_percent: {
      description:
        "The percentage comparison to a normal value reference range of the volume of air that a patient can forcibly exhale from the lungs in one second post-bronchodilator.\n",
      termDef: {
        cde_id: 3302948,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Post Bronchodilator Lung Forced Expiratory Volume 1 Test Lab Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3302948&version=1.0"
      }
    },
    fev1_ref_pre_bronch_percent: {
      description:
        "The percentage comparison to a normal value reference range of the volume of air that a patient can forcibly exhale from the lungs in one second pre-bronchodilator.\n",
      termDef: {
        cde_id: 3302947,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Pre Bronchodilator Lung Forced Expiratory Volume 1 Test Lab Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3302947&version=1.0"
      }
    },
    figo_stage: {
      description:
        "The extent of a cervical or endometrial cancer within the body, especially whether the disease has spread from the original site to other parts of the body, as described by the International Federation of Gynecology and Obstetrics (FIGO) stages.\n",
      termDef: {
        cde_id: 3225684,
        cde_version: 1.0,
        source: "caDSR",
        term: "Gynecologic Tumor Grouping Cervical Endometrial FIGO 2009 Stage",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3225684&version=1.0"
      }
    },
    file_name: {
      description: "The name (or part of a name) of a file (of any type).\n"
    },
    file_size: {
      description: "The size of the data file (object) in bytes.\n"
    },
    file_state: { description: "The current state of the data file object.\n" },
    flow_cell_barcode: { description: "Flow Cell Barcode.\n" },
    freezing_method: {
      description:
        "Text term that represents the method used for freezing the sample.\n",
      termDef: {
        cde_id: 5432607,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Freezing Method Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432607&version=1.0"
      }
    },
    gender: {
      description:
        "Text designations that identify gender. Gender is described as the assemblage of properties that distinguish people on the basis of their societal roles. [Explanatory Comment 1: Identification of gender is based upon self-report and may come from a form, questionnaire, interview, etc.]\n",
      termDef: {
        cde_id: 2200604,
        cde_version: 3.0,
        source: "caDSR",
        term: "Person Gender Text Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2200604&version=3.0"
      }
    },
    height: {
      description: "The height of the patient in centimeters.\n",
      termDef: {
        cde_id: 649,
        cde_version: 4.1,
        source: "caDSR",
        term: "Patient Height Measurement",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=649&version=4.1"
      }
    },
    her2_erbb2_percent_positive_ihc: {
      description:
        "Classification to represent the number of positive HER2/ERBB2 cells in a specimen or sample.\n",
      termDef: {
        cde_id: 3086980,
        cde_version: 1.0,
        source: "caDSR",
        term: "HER2 ERBB Positive Finding Cell Percentage Category",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3086980&version=1.0"
      }
    },
    her2_erbb2_result_fish: {
      description:
        "the type of outcome for HER2 as determined by an in situ hybridization (ISH) assay.\n",
      termDef: {
        cde_id: 2854089,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Laboratory Procedure HER2/neu in situ Hybridization Outcome Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2854089&version=1.0"
      }
    },
    her2_erbb2_result_ihc: {
      description:
        "Text term to signify the result of the medical procedure that involves testing a sample of blood or tissue for HER2 by histochemical localization of immunoreactive substances using labeled antibodies as reagents.\n",
      termDef: {
        cde_id: 2957563,
        cde_version: 2.0,
        source: "caDSR",
        term:
          "Laboratory Procedure HER2/neu Immunohistochemistry Receptor Status",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2957563&version=2.0"
      }
    },
    hiv_positive: {
      description:
        "Text term to signify whether a physician has diagnosed HIV infection in a patient.\n",
      termDef: {
        cde_id: 4030799,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Physician Diagnosed HIV Infection Personal Medical History Yes No Not Applicable Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4030799&version=1.0"
      }
    },
    hpv_positive_type: {
      description:
        "Text classification to represent the strain or type of human papillomavirus identified in an individual.\n",
      termDef: {
        cde_id: 2922649,
        cde_version: 1.0,
        source: "caDSR",
        term: "Human Papillomavirus Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2922649&version=1.0"
      }
    },
    hpv_status: {
      description: "The findings of the oncogenic HPV.\n",
      termDef: {
        cde_id: 2230033,
        cde_version: 1.0,
        source: "caDSR",
        term: "Oncogenic Human Papillomavirus Result Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2230033&version=1.0"
      }
    },
    id: "_terms",
    includes_spike_ins: { description: "Spike-in included?\n" },
    initial_weight: {
      description:
        "Numeric value that represents the initial weight of the sample, measured in milligrams.\n",
      termDef: {
        cde_id: 5432605,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Initial Weight Milligram Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432605&version=1.0"
      }
    },
    instrument_model: {
      description:
        "Numeric value that represents the sample dimension that is greater than the shortest dimension and less than the longest dimension, measured in millimeters.\n",
      termDef: {
        cde_id: 5432604,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Intermediate Dimension Millimeter Measurement",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432604&version=1.0"
      }
    },
    intermediate_dimension: {
      description: "Intermediate dimension of the sample, in millimeters.\n"
    },
    is_ffpe: {
      description:
        "Indicator to signify whether or not the tissue sample was fixed in formalin and embedded in paraffin (FFPE).\n",
      termDef: {
        cde_id: 4170557,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Specimen Processing Formalin Fixed Paraffin Embedded Tissue Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4170557&version=1.0"
      }
    },
    is_paired_end: { description: "Are the reads paired end?\n" },
    last_known_disease_status: {
      description:
        "Text term that describes the last known state or condition of an individual's neoplasm.\n",
      termDef: {
        cde_id: 5424231,
        cde_version: 1.0,
        source: "caDSR",
        term: "Person Last Known Neoplasm Status",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2759550&version=1.0"
      }
    },
    laterality: {
      description:
        "For tumors in paired organs, designates the side on which the cancer originates.\n",
      termDef: {
        cde_id: 827,
        cde_version: 3.0,
        source: "caDSR",
        term: "Primary Tumor Laterality",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=827&version=3.0"
      }
    },
    ldh_level_at_diagnosis: {
      description:
        "The 2 decimal place numeric laboratory value measured, assigned or computed related to the assessment of lactate dehydrogenase in a specimen.\n",
      termDef: {
        cde_id: 2798766,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Laboratory Procedure Lactate Dehydrogenase Result Integer::2 Decimal Place Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2798766&version=1.0"
      }
    },
    ldh_normal_range_upper: {
      description:
        "The top value of the range of statistical characteristics that are supposed to represent accepted standard, non-pathological pattern for lactate dehydrogenase (units not specified).\n",
      termDef: {
        cde_id: 2597015,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Laboratory Procedure Lactate Dehydrogenase Result Upper Limit of Normal Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2597015&version=1.0"
      }
    },
    library_name: { description: "Name of the library.\n" },
    library_preparation_kit_catalog_number: {
      description: "Catalog of Library Preparation Kit\n"
    },
    library_preparation_kit_name: {
      description: "Name of Library Preparation Kit\n"
    },
    library_preparation_kit_vendor: {
      description: "Vendor of Library Preparation Kit\n"
    },
    library_preparation_kit_version: {
      description: "Version of Library Preparation Kit\n"
    },
    library_selection: { description: "Library Selection Method\n" },
    library_strand: { description: "Library stranded-ness.\n" },
    library_strategy: { description: "Library strategy.\n" },
    longest_dimension: {
      description:
        "Numeric value that represents the longest dimension of the sample, measured in millimeters.\n",
      termDef: {
        cde_id: 5432602,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Longest Dimension Millimeter Measurement",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432602&version=1.0"
      }
    },
    lymph_nodes_positive: {
      description:
        "The number of lymph nodes involved with disease as determined by pathologic examination.\n",
      termDef: {
        cde_id: 89,
        cde_version: 3.0,
        source: "caDSR",
        term: "Lymph Node(s) Positive Number",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=89&version=3.0"
      }
    },
    lymphatic_invasion_present: {
      description:
        "A yes/no indicator to ask if small or thin-walled vessel invasion is present, indicating lymphatic involvement\n",
      termDef: {
        cde_id: 64171,
        cde_version: 3.0,
        source: "caDSR",
        term: "Lymphatic/Small vessel Invasion Ind",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=64171&version=3.0"
      }
    },
    md5sum: {
      description:
        "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
    },
    method_of_diagnosis: {
      description: "The method used to initially the patient's diagnosis.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Method of Diagnosis",
        term_url: null
      }
    },
    method_of_sample_procurement: {
      description:
        "The method used to procure the sample used to extract analyte(s).\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Method of Sample Procurement",
        term_url: null
      }
    },
    microsatellite_instability_abnormal: {
      description:
        "The yes/no indicator to signify the status of a tumor for microsatellite instability.\n",
      termDef: {
        cde_id: 3123142,
        cde_version: 1.0,
        source: "caDSR",
        term: "Microsatellite Instability Occurrence Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3123142&version=1.0"
      }
    },
    morphology: {
      description:
        "The third edition of the International Classification of Diseases for Oncology, published in 2000 used principally in tumor and cancer registries for coding the site (topography) and the histology (morphology) of neoplasms. The study of the structure of the cells and their arrangement to constitute tissues and, finally, the association among these to form organs. In pathology, the microscopic process of identifying normal and abnormal morphologic characteristics in tissues, by employing various cytochemical and immunocytochemical stains. A system of numbered categories for representation of data.\n",
      termDef: {
        cde_id: 3226275,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "International Classification of Diseases for Oncology, Third Edition ICD-O-3 Histology Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3226275&version=1.0"
      }
    },
    new_event_anatomic_site: {
      description:
        "Text term to specify the anatomic location of the return of tumor after treatment.\n",
      termDef: {
        cde_id: 3108271,
        cde_version: 2.0,
        source: "caDSR",
        term: "New Neoplasm Event Occurrence Anatomic Site",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3108271&version=2.0"
      }
    },
    new_event_type: {
      description: "Text term to identify a new tumor event.\n",
      termDef: {
        cde_id: 3119721,
        cde_version: 1.0,
        source: "caDSR",
        term: "New Neoplasm Event Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3119721&version=1.0"
      }
    },
    normal_tumor_genotype_snp_match: {
      description:
        "Text term that represents whether or not the genotype of the normal tumor matches or if the data is not available.\n",
      termDef: {
        cde_id: 4588156,
        cde_version: 1.0,
        source: "caDSR",
        term: "Normal Tumor Genotype Match Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4588156&version=1.0"
      }
    },
    number_proliferating_cells: {
      description:
        "Numeric value that represents the count of proliferating cells determined during pathologic review of the sample slide(s).\n",
      termDef: {
        cde_id: 5432636,
        cde_version: 1.0,
        source: "caDSR",
        term: "Pathology Review Slide Proliferating Cell Count",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432636&version=1.0"
      }
    },
    oct_embedded: {
      description:
        "Indicator of whether or not the sample was embedded in Optimal Cutting Temperature (OCT) compound.\n",
      termDef: {
        cde_id: 5432538,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Tissue Sample Optimal Cutting Temperature Compound Embedding Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432538&version=1.0"
      }
    },
    pack_years_smoked: {
      description:
        "Numeric computed value to represent lifetime tobacco exposure defined as number of cigarettes smoked per day x number of years smoked divided by 20.\n",
      termDef: {
        cde_id: 2955385,
        cde_version: 1.0,
        source: "caDSR",
        term: "Person Cigarette Smoking History Pack Year Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2955385&version=1.0"
      }
    },
    percent_eosinophil_infiltration: {
      description:
        "Numeric value to represent the percentage of infiltration by eosinophils in a tumor sample or specimen.\n",
      termDef: {
        cde_id: 2897700,
        cde_version: 2.0,
        source: "caDSR",
        term: "Specimen Eosinophilia Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2897700&version=2.0"
      }
    },
    percent_gc_content: {
      description: "The overall %GC of all bases in all sequences.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: "FastQC",
        term: "%GC",
        term_url:
          "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/1%20Basic%20Statistics.html"
      }
    },
    percent_granulocyte_infiltration: {
      description:
        "Numeric value to represent the percentage of infiltration by granulocytes in a tumor sample or specimen.\n",
      termDef: {
        cde_id: 2897705,
        cde_version: 2.0,
        source: "caDSR",
        term: "Specimen Granulocyte Infiltration Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2897705&version=2.0"
      }
    },
    percent_inflam_infiltration: {
      description:
        "Numeric value to represent local response to cellular injury, marked by capillary dilatation, edema and leukocyte infiltration; clinically, inflammation is manifest by reddness, heat, pain, swelling and loss of function, with the need to heal damaged tissue.\n",
      termDef: {
        cde_id: 2897695,
        cde_version: 1.0,
        source: "caDSR",
        term: "Specimen Inflammation Change Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2897695&version=1.0"
      }
    },
    percent_lymphocyte_infiltration: {
      description:
        "Numeric value to represent the percentage of infiltration by lymphocytes in a solid tissue normal sample or specimen.\n",
      termDef: {
        cde_id: 2897710,
        cde_version: 2.0,
        source: "caDSR",
        term: "Specimen Lymphocyte Infiltration Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2897710&version=2.0"
      }
    },
    percent_monocyte_infiltration: {
      description:
        "Numeric value to represent the percentage of monocyte infiltration in a sample or specimen.\n",
      termDef: {
        cde_id: 5455535,
        cde_version: 1.0,
        source: "caDSR",
        term: "Specimen Monocyte Infiltration Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5455535&version=1.0"
      }
    },
    percent_necrosis: {
      description:
        "Numeric value to represent the percentage of cell death in a malignant tumor sample or specimen.\n",
      termDef: {
        cde_id: 2841237,
        cde_version: 1.0,
        source: "caDSR",
        term: "Malignant Neoplasm Necrosis Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2841237&version=1.0"
      }
    },
    percent_neutrophil_infiltration: {
      description:
        "Numeric value to represent the percentage of infiltration by neutrophils in a tumor sample or specimen.\n",
      termDef: {
        cde_id: 2841267,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Malignant Neoplasm Neutrophil Infiltration Percentage Cell Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2841267&version=1.0"
      }
    },
    percent_normal_cells: {
      description:
        "Numeric value to represent the percentage of normal cell content in a malignant tumor sample or specimen.\n",
      termDef: {
        cde_id: 2841233,
        cde_version: 1.0,
        source: "caDSR",
        term: "Malignant Neoplasm Normal Cell Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2841233&version=1.0"
      }
    },
    percent_stromal_cells: {
      description:
        "Numeric value to represent the percentage of reactive cells that are present in a malignant tumor sample or specimen but are not malignant such as fibroblasts, vascular structures, etc.\n",
      termDef: {
        cde_id: 2841241,
        cde_version: 1.0,
        source: "caDSR",
        term: "Malignant Neoplasm Stromal Cell Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2841241&version=1.0"
      }
    },
    percent_tumor_cells: {
      description:
        "Numeric value that represents the percentage of infiltration by granulocytes in a sample.\n",
      termDef: {
        cde_id: 5432686,
        cde_version: 1.0,
        source: "caDSR",
        term: "Specimen Tumor Cell Percentage Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432686&version=1.0"
      }
    },
    percent_tumor_nuclei: {
      description:
        "Numeric value to represent the percentage of tumor nuclei in a malignant neoplasm sample or specimen.\n",
      termDef: {
        cde_id: 2841225,
        cde_version: 1.0,
        source: "caDSR",
        term: "Malignant Neoplasm Neoplasm Nucleus Percentage Cell Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2841225&version=1.0"
      }
    },
    perineural_invasion_present: {
      description:
        "a yes/no indicator to ask if perineural invasion or infiltration of tumor or cancer is present.\n",
      termDef: {
        cde_id: 64181,
        cde_version: 3.0,
        source: "caDSR",
        term: "Tumor Perineural Invasion Ind",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=64181&version=3.0"
      }
    },
    platform: { description: "Name of the platform used to obtain data.\n" },
    portion_number: {
      description:
        "Numeric value that represents the sequential number assigned to a portion of the sample.\n",
      termDef: {
        cde_id: 5432711,
        cde_version: 1.0,
        source: "caDSR",
        term: "Biospecimen Portion Sequence Number",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432711&version=1.0"
      }
    },
    portion_weight: {
      description:
        "Numeric value that represents the sample portion weight, measured in milligrams.\n",
      termDef: {
        cde_id: 5432593,
        cde_version: 1.0,
        source: "caDSR",
        term: "Biospecimen Portion Weight Milligram Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432593&version=1.0"
      }
    },
    preservation_method: {
      description:
        "Text term that represents the method used to preserve the sample.\n",
      termDef: {
        cde_id: 5432521,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Preservation Method Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432521&version=1.0"
      }
    },
    primary_diagnosis: {
      description:
        "Text term for the structural pattern of cancer cells used to define a microscopic diagnosis.\n",
      termDef: {
        cde_id: 3081934,
        cde_version: 3.0,
        source: "caDSR",
        term: "Neoplasm Histologic Type Name",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3081934&version=3.0"
      }
    },
    prior_malignancy: {
      description:
        "Text term to describe the patient's history of prior cancer diagnosis and the spatial location of any previous cancer occurrence.\n",
      termDef: {
        cde_id: 3382736,
        cde_version: 2.0,
        source: "caDSR",
        term: "Prior Cancer Diagnosis Occurrence Description Text",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3382736&version=2.0"
      }
    },
    prior_treatment: {
      description:
        "A yes/no/unknown/not applicable indicator related to the administration of therapeutic agents received before the body specimen was collected.\n",
      termDef: {
        cde_id: 4231463,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Therapeutic Procedure Prior Specimen Collection Administered Yes No Unknown Not Applicable Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4231463&version=1.0"
      }
    },
    progesterone_receptor_percent_positive_ihc: {
      description:
        "Classification to represent Progesterone Receptor Positive results expressed as a percentage value.\n",
      termDef: {
        cde_id: 3128342,
        cde_version: 1.0,
        source: "caDSR",
        term: "Progesterone Receptor Level Cell Percentage Category",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3128342&version=1.0"
      }
    },
    progesterone_receptor_result_ihc: {
      description:
        "Text term to represent the overall result of Progresterone Receptor (PR) testing.\n",
      termDef: {
        cde_id: 2957357,
        cde_version: 2.0,
        source: "caDSR",
        term: "Breast Carcinoma Progesterone Receptor Status",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2957357&version=2.0"
      }
    },
    progression_or_recurrence: {
      description:
        "Yes/No/Unknown indicator to identify whether a patient has had a new tumor event after initial treatment.\n",
      termDef: {
        cde_id: 3121376,
        cde_version: 1.0,
        source: "caDSR",
        term: "New Neoplasm Event Post Initial Therapy Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3121376&version=1.0"
      }
    },
    project_id: {
      description:
        "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
    },
    qc_metric_state: {
      description:
        "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: "FastQC",
        term: "QC Metric State",
        term_url:
          "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
      }
    },
    race: {
      description:
        "An arbitrary classification of a taxonomic group that is a division of a species. It usually arises as a consequence of geographical isolation within a species and is characterized by shared heredity, physical attributes and behavior, and in the case of humans, by common history, nationality, or geographic distribution. The provided values are based on the categories defined by the U.S. Office of Management and Business and used by the U.S. Census Bureau.\n",
      termDef: {
        cde_id: 2192199,
        cde_version: 1.0,
        source: "caDSR",
        term: "Race Category Text",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2192199&version=1.0"
      }
    },
    read_group_name: { description: "The name of the read group.\n" },
    read_length: { description: "The length of the reads.\n" },
    relationship_age_at_diagnosis: {
      description:
        "The age (in years) when the patient's relative was first diagnosed.\n",
      termDef: {
        cde_id: 5300571,
        cde_version: 1.0,
        source: "caDSR",
        term: "Relative Diagnosis Age Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5300571&version=1.0"
      }
    },
    relationship_type: {
      description:
        "The subgroup that describes the state of connectedness between members of the unit of society organized around kinship ties.\n",
      termDef: {
        cde_id: 2690165,
        cde_version: 2.0,
        source: "caDSR",
        term: "Family Member Relationship Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2690165&version=2.0"
      }
    },
    relative_with_cancer_history: {
      description:
        "Indicator to signify whether or not an individual's biological relative has been diagnosed with another type of cancer.\n",
      termDef: {
        cde_id: 3901752,
        cde_version: 1.0,
        source: "caDSR",
        term: "Other Cancer Biological Relative History Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3901752&version=1.0"
      }
    },
    residual_disease: {
      description:
        "Text terms to describe the status of a tissue margin following surgical resection.\n",
      termDef: {
        cde_id: 2608702,
        cde_version: 1.0,
        source: "caDSR",
        term: "Surgical Margin Resection Status",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2608702&version=1.0"
      }
    },
    sample_type: {
      description:
        "Text term to describe the source of a biospecimen used for a laboratory test.\n",
      termDef: {
        cde_id: 3111302,
        cde_version: 2.0,
        source: "caDSR",
        term: "Specimen Type Collection Biospecimen Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3111302&version=2.0"
      }
    },
    sample_type_id: {
      description: "The accompanying sample type id for the sample type.\n"
    },
    section_location: { description: "Tissue source of the slide.\n" },
    sequencing_center: {
      description: "Name of the center that provided the sequence files.\n"
    },
    shortest_dimension: {
      description:
        "Numeric value that represents the shortest dimension of the sample, measured in millimeters.\n",
      termDef: {
        cde_id: 5432603,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Short Dimension Millimeter Measurement",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432603&version=1.0"
      }
    },
    site_of_resection_or_biopsy: {
      description:
        "The third edition of the International Classification of Diseases for Oncology, published in 2000, used principally in tumor and cancer registries for coding the site (topography) and the histology (morphology) of neoplasms. The description of an anatomical region or of a body part. Named locations of, or within, the body. A system of numbered categories for representation of data.\n",
      termDef: {
        cde_id: 3226281,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "International Classification of Diseases for Oncology, Third Edition ICD-O-3 Site Code",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3226281&version=1.0"
      }
    },
    size_selection_range: { description: "Range of size selection.\n" },
    smoking_history: {
      description:
        "Category describing current smoking status and smoking history as self-reported by a patient.\n",
      termDef: {
        cde_id: 2181650,
        cde_version: 1.0,
        source: "caDSR",
        term: "Smoking History",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2181650&version=1.0"
      }
    },
    smoking_intensity: {
      description:
        "Numeric computed value to represent lifetime tobacco exposure defined as number of cigarettes smoked per day x number of years smoked divided by 20\n",
      termDef: {
        cde_id: 2955385,
        cde_version: 1.0,
        source: "caDSR",
        term: "Person Cigarette Smoking History Pack Year Value",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2955385&version=1.0"
      }
    },
    source_center: {
      description: "Name of the center that provided the item.\n"
    },
    spectrophotometer_method: {
      description:
        "Name of the method used to determine the concentration of purified nucleic acid within a solution.\n",
      termDef: {
        cde_id: 3008378,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Purification Nucleic Acid Solution Concentration Determination Method Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3008378&version=1.0"
      }
    },
    spike_ins_concentration: { description: "Spike in concentration.\n" },
    spike_ins_fasta: {
      description:
        "Name of the FASTA file that contains the spike-in sequences.\n"
    },
    state: { description: "The current state of the object.\n" },
    target_capture_kit_catalog_number: {
      description: "Catalog of Target Capture Kit.\n"
    },
    target_capture_kit_name: { description: "Name of Target Capture Kit.\n" },
    target_capture_kit_target_region: {
      description: "Target Capture Kit BED file.\n"
    },
    target_capture_kit_vendor: {
      description: "Vendor of Target Capture Kit.\n"
    },
    target_capture_kit_version: {
      description: "Version of Target Capture Kit.\n"
    },
    therapeutic_agents: {
      description:
        "Text identification of the individual agent(s) used as part of a prior treatment regimen.\n",
      termDef: {
        cde_id: 2975232,
        cde_version: 1.0,
        source: "caDSR",
        term: "Prior Therapy Regimen Text",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2975232&version=1.0"
      }
    },
    time_between_clamping_and_freezing: {
      description:
        "Numeric representation of the elapsed time between the surgical clamping of blood supply and freezing of the sample, measured in minutes.\n",
      termDef: {
        cde_id: 5432611,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Clamping and Freezing Elapsed Minute Time",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432611&version=1.0"
      }
    },
    time_between_excision_and_freezing: {
      description:
        "Numeric representation of the elapsed time between the excision and freezing of the sample, measured in minutes.\n",
      termDef: {
        cde_id: 5432612,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Excision and Freezing Elapsed Minute Time",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432612&version=1.0"
      }
    },
    tissue_or_organ_of_origin: {
      description:
        "Text term that describes the anatomic site of the tumor or disease.\n",
      termDef: {
        cde_id: 3427536,
        cde_version: 3.0,
        source: "caDSR",
        term: "Tumor Disease Anatomic Site",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3427536&version=3.0"
      }
    },
    tissue_type: {
      description:
        "Text term that represents a description of the kind of tissue collected with respect to disease status or proximity to tumor tissue.\n",
      termDef: {
        cde_id: 5432687,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tissue Sample Description Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432687&version=1.0"
      }
    },
    to_trim_adapter_sequence: {
      description: "Does the user suggest adapter trimming?\n"
    },
    tobacco_smoking_onset_year: {
      description: "The year in which the participant began smoking.\n",
      termDef: {
        cde_id: 2228604,
        cde_version: 1.0,
        source: "caDSR",
        term: "Started Smoking Year",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2228604&version=1.0"
      }
    },
    tobacco_smoking_quit_year: {
      description: "The year in which the participant quit smoking.\n",
      termDef: {
        cde_id: 2228610,
        cde_version: 1.0,
        source: "caDSR",
        term: "Stopped Smoking Year",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2228610&version=1.0"
      }
    },
    tobacco_smoking_status: {
      description:
        "Category describing current smoking status and smoking history as self-reported by a patient.\n",
      termDef: {
        cde_id: 2181650,
        cde_version: 1.0,
        source: "caDSR",
        term: "Patient Smoking History Category",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2181650&version=1.0"
      }
    },
    total_sequences: {
      description: "A count of the total number of sequences processed.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: "FastQC",
        term: "Total Sequences",
        term_url:
          "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/1%20Basic%20Statistics.html"
      }
    },
    treatment_anatomic_site: {
      description:
        "The anatomic site or field targeted by a treatment regimen or single agent therapy.\n",
      termDef: {
        cde_id: null,
        cde_version: null,
        source: null,
        term: "Treatment Anatomic Site",
        term_url: null
      }
    },
    treatment_intent_type: {
      description:
        "Text term to identify the reason for the administration of a treatment regimen. [Manually-curated]\n",
      termDef: {
        cde_id: 2793511,
        cde_version: 1.0,
        source: "caDSR",
        term: "Treatment Regimen Intent Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2793511&version=1.0"
      }
    },
    treatment_or_therapy: {
      description:
        "A yes/no/unknown/not applicable indicator related to the administration of therapeutic agents received before the body specimen was collected.\n",
      termDef: {
        cde_id: 4231463,
        cde_version: 1.0,
        source: "caDSR",
        term:
          "Therapeutic Procedure Prior Specimen Collection Administered Yes No Unknown Not Applicable Indicator",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4231463&version=1.0"
      }
    },
    treatment_outcome: {
      description:
        "Text term that describes the patient\u00bfs final outcome after the treatment was administered.\n",
      termDef: {
        cde_id: 5102383,
        cde_version: 1.0,
        source: "caDSR",
        term: "Treatment Outcome Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5102383&version=1.0"
      }
    },
    treatment_type: {
      description:
        "Text term that describes the kind of treatment administered.\n",
      termDef: {
        cde_id: 5102381,
        cde_version: 1.0,
        source: "caDSR",
        term: "Treatment Method Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5102381&version=1.0"
      }
    },
    tumor_code: {
      description: "Diagnostic tumor code of the tissue sample source.\n"
    },
    tumor_code_id: {
      description: "BCR-defined id code for the tumor sample.\n"
    },
    tumor_descriptor: {
      description:
        "Text that describes the kind of disease present in the tumor specimen as related to a specific timepoint.\n",
      termDef: {
        cde_id: 3288124,
        cde_version: 1.0,
        source: "caDSR",
        term: "Tumor Tissue Disease Description Type",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3288124&version=1.0"
      }
    },
    tumor_grade: {
      description:
        "Numeric value to express the degree of abnormality of cancer cells, a measure of differentiation and aggressiveness.\n",
      termDef: {
        cde_id: 2785839,
        cde_version: 2.0,
        source: "caDSR",
        term: "Neoplasm Histologic Grade",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2785839&version=2.0"
      }
    },
    tumor_stage: {
      description:
        "The extent of a cancer in the body. Staging is usually based on the size of the tumor, whether lymph nodes contain cancer, and whether the cancer has spread from the original site to other parts of the body. The accepted values for tumor_stage depend on the tumor site, type, and accepted staging system. These items should accompany the tumor_stage value as associated metadata.\n",
      termDef: {
        cde_id: "C16899",
        cde_version: null,
        source: "NCIt",
        term: "Tumor Stage",
        term_url:
          "https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI%20Thesaurus&code=C16899"
      }
    },
    vascular_invasion_present: {
      description:
        "The yes/no indicator to ask if large vessel or venous invasion was detected by surgery or presence in a tumor specimen.\n",
      termDef: {
        cde_id: 64358,
        cde_version: 3.0,
        source: "caDSR",
        term: "Tumor Vascular Invasion Ind-3",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=64358&version=3.0"
      }
    },
    vital_status: {
      description:
        "The survival state of the person registered on the protocol.\n",
      termDef: {
        cde_id: 5,
        cde_version: 5.0,
        source: "caDSR",
        term: "Patient Vital Status",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5&version=5.0"
      }
    },
    weight: {
      description: "The weight of the patient measured in kilograms.\n",
      termDef: {
        cde_id: 651,
        cde_version: 4.0,
        source: "caDSR",
        term: "Patient Weight Measurement",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=651&version=4.0"
      }
    },
    well_number: {
      description:
        "Numeric value that represents the the well location within a plate for the analyte or aliquot from the sample.\n",
      termDef: {
        cde_id: 5432613,
        cde_version: 1.0,
        source: "caDSR",
        term: "Biospecimen Analyte or Aliquot Plate Well Number",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432613&version=1.0"
      }
    },
    workflow_type: {
      description: "Generic name for the workflow used to analyze a data set.\n"
    },
    year_of_birth: {
      description:
        "Numeric value to represent the calendar year in which an individual was born.\n",
      termDef: {
        cde_id: 2896954,
        cde_version: 1.0,
        source: "caDSR",
        term: "Year Birth Date Number",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2896954&version=1.0"
      }
    },
    year_of_death: {
      description:
        "Numeric value to represent the year of the death of an individual.\n",
      termDef: {
        cde_id: 2897030,
        cde_version: 1.0,
        source: "caDSR",
        term: "Year Death Number",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2897030&version=1.0"
      }
    },
    year_of_diagnosis: {
      description:
        "Numeric value to represent the year of an individual's initial pathologic diagnosis of cancer.\n",
      termDef: {
        cde_id: 2896960,
        cde_version: 1.0,
        source: "caDSR",
        term: "Year of initial pathologic diagnosis",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2896960&version=1.0"
      }
    },
    years_smoked: {
      description:
        "Numeric value (or unknown) to represent the number of years a person has been smoking.\n",
      termDef: {
        cde_id: 3137957,
        cde_version: 1.0,
        source: "caDSR",
        term: "Person Smoking Duration Year Count",
        term_url:
          "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=3137957&version=1.0"
      }
    }
  },
  acknowledgement: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description: "Acknowledgement of an individual involved in a project.",
    id: "acknowledgement",
    links: [
      {
        backref: "acknowledgements",
        label: "contribute_to",
        multiplicity: "many_to_many",
        name: "projects",
        required: true,
        target_type: "project"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      acknowledgee: {
        description:
          "The indvidiual or group being acknowledged by the project.",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: { type: "string" },
      projects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                code: { type: "string" },
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: { type: ["string", "null"] },
      type: { enum: ["acknowledgement"] },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "projects"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Acknowledgement",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  aggregated_genotyping_array: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "DNA array data files aggregating genome-wide SNP information from several subjects (cohort).",
    id: "aggregated_genotyping_array",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "aggregated_genotyping_arrays",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "aggregated_genotyping_arrays",
            label: "data_from",
            multiplicity: "many_to_many",
            name: "genotyping_arrays",
            required: false,
            target_type: "genotyping_array"
          },
          {
            backref: "aggregated_genotyping_arrays",
            label: "data_from",
            multiplicity: "many_to_many",
            name: "aliquots",
            required: false,
            target_type: "aliquot"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["SNP Array Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["PED", "VCF", "IND"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Aggregated SNP Alleles", "Individual SNP Alleles"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["SNP Array Genotyping"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      genotyping_arrays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      platform: {
        enum: [
          "Illumina OMNI 5M SNP Array",
          "Illumina OMNI 2.5M SNP Array",
          "Illumina Infinium 20K Canine SNP Beadchip",
          "Illumina CanineHD BeadChip",
          "Affymetrix GeneChip Canine Genome Array",
          "Axiom Canine Genotyping Array",
          "Illumina CanineSNP20 BeadChip"
        ],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "data_category",
      "data_type",
      "data_format"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Aggregated Genotyping array",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  aligned_reads: {
    additionalProperties: false,
    category: "data_file",
    chema: "http://json-schema.org/draft-04/schema#",
    description:
      "Data file containing aligned reads that are generated internally.\n",
    id: "aligned_reads",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "aligned_reads_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "aligned_reads_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "alignment_cocleaning_workflows",
            required: false,
            target_type: "alignment_cocleaning_workflow"
          },
          {
            backref: "aligned_reads_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "alignment_workflows",
            required: false,
            target_type: "alignment_workflow"
          },
          {
            backref: "aligned_reads_files",
            label: "matched_to",
            multiplicity: "one_to_many",
            name: "submitted_unaligned_reads_files",
            required: false,
            target_type: "submitted_unaligned_reads"
          },
          {
            backref: "aligned_reads_files",
            label: "matched_to",
            multiplicity: "one_to_one",
            name: "submitted_aligned_reads_files",
            required: false,
            target_type: "submitted_aligned_reads"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      alignment_cocleaning_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      alignment_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Sequencing Data", "Sequencing Reads", "Raw Sequencing Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["BAM", "CRAM"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Aligned Reads"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: [
          "WGS",
          "WXS",
          "Low Pass WGS",
          "Validation",
          "RNA-Seq",
          "miRNA-Seq",
          "Total RNA-Seq"
        ],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      platform: {
        enum: [
          "Illumina",
          "SOLiD",
          "LS454",
          "Ion Torrent",
          "Complete Genomics",
          "PacBio",
          "Other"
        ],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitted_unaligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "md5sum",
      "data_category",
      "data_type",
      "data_format",
      "experimental_strategy",
      "platform"
    ],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Aligned Reads",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  aligned_reads_index: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "index_file",
    description: "Data file containing the index for a set of aligned reads.",
    id: "aligned_reads_index",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "aligned_reads_indexes",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "aligned_reads_indexes",
            label: "derived_from",
            multiplicity: "one_to_one",
            name: "submitted_aligned_reads_files",
            required: true,
            target_type: "submitted_aligned_reads"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Sequencing Data", "Sequencing Reads", "Raw Sequencing Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["BAI"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Aligned Reads Index"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "md5sum",
      "data_category",
      "data_type",
      "data_format"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Aligned Reads Index",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  alignment_cocleaning_workflow: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "analysis",
    description:
      "Metadata for the alignment and cocleaning pipeline used to align reads in the GDC harmonization pipelines.\n",
    id: "alignment_cocleaning_workflow",
    links: [
      {
        exclusive: true,
        required: true,
        subgroup: [
          {
            backref: "alignment_cocleaning_workflows",
            label: "performed_on",
            multiplicity: "one_to_many",
            name: "submitted_aligned_reads_files",
            required: false,
            target_type: "submitted_aligned_reads"
          },
          {
            backref: "alignment_cocleaning_workflows",
            label: "performed_on",
            multiplicity: "one_to_many",
            name: "submitted_unaligned_reads_files",
            required: false,
            target_type: "submitted_unaligned_reads"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitted_unaligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_type: {
        enum: ["BWA with Mark Duplicates and Cocleaning"],
        term: {
          description:
            "Generic name for the workflow used to analyze a data set.\n"
        }
      },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    },
    required: ["submitter_id", "type", "workflow_link", "workflow_type"],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Alignment Cocleaning Workflow",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  alignment_workflow: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "analysis",
    description:
      "Metadata for the alignment pipeline used to align reads in the GDC harmonization pipelines.\n",
    id: "alignment_workflow",
    links: [
      {
        exclusive: true,
        required: true,
        subgroup: [
          {
            backref: "alignment_workflows",
            label: "performed_on",
            multiplicity: "one_to_many",
            name: "submitted_aligned_reads_files",
            required: false,
            target_type: "submitted_aligned_reads"
          },
          {
            backref: "alignment_workflows",
            label: "performed_on",
            multiplicity: "one_to_many",
            name: "submitted_unaligned_reads_files",
            required: false,
            target_type: "submitted_unaligned_reads"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitted_unaligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_type: { enum: ["STAR", "BWA-aln", "BWA-mem", "spinnaker"] },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    },
    required: ["submitter_id", "type", "workflow_type"],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Alignment Workflow",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  aliquot: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "biospecimen",
    constraints: null,
    description:
      "Pertaining to a portion of the whole; any one of two or more samples of something, of the same volume or weight.\n",
    id: "aliquot",
    links: [
      {
        backref: "aliquots",
        label: "derived_from",
        multiplicity: "many_to_one",
        name: "samples",
        required: true,
        target_type: "sample"
      }
    ],
    program: "*",
    project: "*",
    properties: {
      a260_a280_ratio: {
        term: {
          description:
            "Numeric value that represents the sample ratio of nucleic acid absorbance at 260 nm and 280 nm, used to determine a measure of DNA purity.\n",
          termDef: {
            cde_id: 5432595,
            cde_version: 1.0,
            source: "caDSR",
            term:
              "Nucleic Acid Absorbance at 260 And Absorbance at 280 DNA Purity Ratio Value",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432595&version=1.0"
          }
        },
        type: "number"
      },
      aliquot_quantity: {
        term: {
          description:
            "The quantity in micrograms (ug) of the aliquot(s) derived from the analyte(s) shipped for sequencing and characterization.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: null,
            term: "Biospecimen Aliquot Quantity",
            term_url: null
          }
        },
        type: "number"
      },
      aliquot_volume: {
        term: {
          description:
            "The volume in microliters (ml) of the aliquot(s) derived from the analyte(s) shipped for sequencing and characterization.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: null,
            term: "Biospecimen Aliquot Volume",
            term_url: null
          }
        },
        type: "number"
      },
      amount: {
        term: { description: "Weight in grams or volume in mL.\n" },
        type: "number"
      },
      analyte_type: {
        term: {
          description:
            "Text term that represents the kind of molecular specimen analyte.\n",
          termDef: {
            cde_id: 2513915,
            cde_version: 2.0,
            source: "caDSR",
            term: "Molecular Specimen Type Text Name",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2513915&version=2.0"
          }
        },
        type: "string"
      },
      analyte_type_id: {
        enum: ["D", "E", "G", "H", "R", "S", "T", "W", "X", "Y"],
        term: {
          description:
            "A single letter code used to identify a type of molecular analyte.\n",
          termDef: {
            cde_id: 5432508,
            cde_version: 1.0,
            source: "caDSR",
            term: "Molecular Analyte Identification Code",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432508&version=1.0"
          }
        }
      },
      concentration: {
        term: {
          description:
            "Numeric value that represents the concentration of an analyte or aliquot extracted from the sample or sample portion, measured in milligrams per milliliter.\n",
          termDef: {
            cde_id: 5432594,
            cde_version: 1.0,
            source: "caDSR",
            term:
              "Biospecimen Analyte or Aliquot Extracted Concentration Milligram per Milliliter Value",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432594&version=1.0"
          }
        },
        type: "number"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      samples: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      source_center: {
        term: { description: "Name of the center that provided the item.\n" },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "samples"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Aliquot",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: []
  },
  copy_number_estimate: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing copy number variation information.\n",
    downloadable: true,
    id: "copy_number_estimate",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "copy_number_estimates",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "copy_number_estimates",
            label: "derived_from",
            multiplicity: "one_to_one",
            name: "copy_number_variation_workflows",
            required: false,
            target_type: "copy_number_variation_workflow"
          },
          {
            backref: "copy_number_estimates",
            label: "derived_from",
            multiplicity: "many_to_many",
            name: "tangent_copy_numbers",
            required: false,
            target_type: "tangent_copy_number"
          },
          {
            backref: "copy_number_estimates",
            label: "derived_from",
            multiplicity: "one_to_one",
            name: "copy_number_segments",
            required: false,
            target_type: "copy_number_segment"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      copy_number_segments: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      copy_number_variation_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Copy Number Variation"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["TXT"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: [
          "Gene Level Copy Number",
          "Gene Level Copy Number Scores",
          "Cohort Level Copy Number Scores"
        ],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["Genotyping Array", "Targeted Sequencing", "WGS"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      platform: {
        enum: ["Affymetrix SNP 6.0", "Illumina", "Ion Torrent"],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      tangent_copy_numbers: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_format",
      "md5sum",
      "data_category",
      "data_type",
      "experimental_strategy",
      "platform"
    ],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Copy Number Estimate",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  copy_number_segment: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "Data file containing the copy number data. Contains all copy numbers detected.\n",
    downloadable: true,
    id: "copy_number_segment",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "copy_number_segments",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "copy_number_segments",
            label: "derived_from",
            multiplicity: "one_to_many",
            name: "tangent_copy_numbers",
            required: false,
            target_type: "tangent_copy_number"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Copy Number Variation"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["TXT"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Copy Number Segment", "Masked Copy Number Segment"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["Genotyping Array", "Targeted Sequencing"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      platform: {
        enum: ["Affymetrix SNP 6.0", "Illumina"],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      tangent_copy_numbers: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_format",
      "md5sum",
      "data_category",
      "data_type",
      "experimental_strategy",
      "platform"
    ],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Copy Number Segment",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  copy_number_variation_workflow: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "analysis",
    description:
      "Metadata for the Copy Number Variation pipeline used to estimate copy number changes from different molecular data sources.\n",
    downloadable: false,
    id: "copy_number_variation_workflow",
    links: [
      {
        backref: "copy_number_variation_workflows",
        label: "performed_on",
        multiplicity: "many_to_many",
        name: "copy_number_segments",
        required: true,
        target_type: "copy_number_segment"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      copy_number_segments: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_type: {
        enum: [
          "GISTIC - Copy Number Score",
          "GISTIC - Arm Level Copy Number",
          "GISTIC - Focal Deletion",
          "GISTIC - Focal Amplification"
        ],
        term: {
          description:
            "Generic name for the workflow used to analyze a data set.\n"
        }
      },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    },
    required: ["submitter_id", "type", "workflow_link", "workflow_type"],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Copy Number Variation Workflow",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  core_metadata_collection: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description: "Structured description of a collection of several datasets\n",
    id: "core_metadata_collection",
    links: [
      {
        backref: "core_metadata_collections",
        label: "data_from",
        multiplicity: "many_to_one",
        name: "projects",
        required: true,
        target_type: "project"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      contributor: {
        description:
          "An entity responsible for making contributions to the resource. Examples of a Contributor include a person, an organization, or a service. Typically, the name of a Contributor should be used to indicate the entity.\n",
        type: "string"
      },
      coverage: {
        description:
          "The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant. Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended best practice is to use a controlled vocabulary such as the Thesaurus of Geographic Names [TGN] (http://www.getty.edu/research/tools/vocabulary/tgn/index.html). Where appropriate, named places or time periods can be used in preference to numeric identifiers such as sets of coordinates or date ranges.\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      creator: {
        description:
          "An entity primarily responsible for making the resource. Examples of a Creator include a person, an organization, or a service. Typically, the name of a Creator should be used to indicate the entity.\n",
        type: "string"
      },
      data_type: {
        description:
          "The nature or genre of the resource. Recommended best practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [DCMITYPE]. To describe the file format, physical medium, or dimensions of the resource, use the Format element.\n",
        type: "string"
      },
      date: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      description: {
        description:
          "An account of the resource. Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource.\n",
        type: "string"
      },
      format: {
        description:
          "The file format, physical medium, or dimensions of the resource. Examples of dimensions include size and duration. Recommended best practice is to use a controlled vocabulary such as the list of Internet Media Types [MIME] (http://www.iana.org/assignments/media-types/).\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      language: {
        description:
          "A language of the resource. Recommended best practice is to use a controlled vocabulary such as RFC 4646 (http://www.ietf.org/rfc/rfc4646.txt).\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      projects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                code: { type: "string" },
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          }
        ]
      },
      publisher: {
        description:
          "An entity responsible for making the resource available. Examples of a Publisher include a person, an organization, or a service. Typically, the name of a Publisher should be used to indicate the entity.\n",
        type: "string"
      },
      relation: {
        description:
          "A related resource. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system.\u00a0\n",
        type: "string"
      },
      rights: {
        description:
          "Information about rights held in and over the resource. Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights.\n",
        type: "string"
      },
      source: {
        description:
          "A related resource from which the described resource is derived. The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      subject: {
        description:
          "The topic of the resource. Typically, the subject will be represented using keywords, key phrases, or classification codes. Recommended best practice is to use a controlled vocabulary.\n",
        type: "string"
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      title: {
        description:
          "A name given to the resource. Typically, a Title will be a name by which the resource is formally known.\n",
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "projects"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Core Metadata Collection",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  data_release: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "internal",
    description: "Internal node to store different data releases.\n",
    id: "data_release",
    links: [
      {
        backref: "data_releases",
        label: "describes",
        multiplicity: "many_to_one",
        name: "roots",
        required: true,
        target_type: "root"
      }
    ],
    namespace: "http://gdc.nci.nih.gov",
    program: "*",
    project: "*",
    properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      major_version: {
        description: "The number identifying the major version.\n",
        type: "integer"
      },
      minor_version: {
        description: "The number identifying the minor version.\n",
        type: "integer"
      },
      name: {
        description: "String representing release name.\n",
        type: "string"
      },
      release_date: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      released: {
        default: false,
        description: "Indicates if it is the current release.\n",
        type: "boolean"
      },
      roots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      type: { enum: ["data_release"] },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["name", "major_version", "minor_version", "type"],
    submittable: false,
    systemProperties: ["id", "created_datetime", "updated_datetime"],
    title: "Data Release",
    type: "object",
    uniqueKeys: [["id"]],
    validators: null
  },
  demographic: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "clinical",
    description:
      "Data for the characterization of the patient by means of segementing the population (e.g.,characterization by age, sex, or breed).\n",
    id: "demographic",
    links: [
      {
        backref: "demographics",
        label: "describes",
        multiplicity: "one_to_one",
        name: "subjects",
        required: true,
        target_type: "subject"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    preferred: ["year_of_death"],
    program: "*",
    project: "*",
    properties: {
      age_range: {
        description:
          "Range of ages for the subject. The age range should not include ages over 89 years.\n",
        type: "string"
      },
      breed: {
        enum: [
          "Affenpinscher",
          "Afghan Hound",
          "Airedale Terrier",
          "Akita",
          "Alaskan Klee Kai",
          "Alaskan Malamute",
          "American Bulldog",
          "American cocker spaniel",
          "American English Coonhound",
          "American Eskimo Dog",
          "American Foxhound",
          "American Pit Bull Terrier",
          "American Staffordshire Terrier",
          "American Water Spaniel",
          "Anatolian Shepherd Dog",
          "Appenzeller Sennenhunde",
          "Australian Cattle Dog",
          "Australian Kelpie",
          "Australian Shepherd",
          "Australian Terrier",
          "Azawakh",
          "Barbet",
          "Basenji",
          "Basset Hound",
          "Beagle",
          "Bearded Collie",
          "Bedlington Terrier",
          "Belgian Malinois",
          "Belgian Sheepdog",
          "Belgian Tervuren",
          "Berger Picard",
          "Bernedoodle",
          "Bernese Mountain Dog",
          "Bichon Frise",
          "Black and Tan Coonhound",
          "Black Mouth Cur",
          "Black Russian Terrier",
          "Bloodhound",
          "Blue Lacy",
          "Bluetick Coonhound",
          "Boerboel",
          "Bolognese",
          "Border Collie",
          "Border Terrier",
          "Borzoi",
          "Boston Terrier",
          "Bouvier des Flandres",
          "Boxer",
          "Boykin Spaniel",
          "Bracco Italiano",
          "Briard",
          "Brittany",
          "Brussels Griffon",
          "Bull Terrier",
          "Bulldog",
          "Bullmastiff",
          "Cairn Terrier",
          "Canaan Dog",
          "Cane Corso",
          "Cardigan Welsh Corgi",
          "Catahoula Leopard Dog",
          "Caucasian Shepherd Dog",
          "Cavalier King Charles Spaniel",
          "Cesky Terrier",
          "Chesapeake Bay Retriever",
          "Chihuahua",
          "Chinese Crested",
          "Chinese Shar-Pei",
          "Chinook",
          "Chow Chow",
          "Clumber Spaniel",
          "Cockapoo",
          "Cocker Spaniel",
          "Collie",
          "Coton de Tulear",
          "Curly-Coated Retriever",
          "Dachshund",
          "Dalmatian",
          "Dandie Dinmont Terrier",
          "Doberman Pinscher",
          "Dogo Argentino",
          "Dogue de Bordeaux",
          "Dutch Shepherd",
          "English Cocker Spaniel",
          "English Foxhound",
          "English Setter",
          "English Springer Spaniel",
          "English Toy Spaniel",
          "Entlebucher Mountain Dog",
          "Field Spaniel",
          "Finnish Lapphund",
          "Finnish Spitz",
          "Flat-Coated Retriever",
          "Fox Terrier",
          "French Bulldog",
          "German Pinscher",
          "German Shepherd Dog",
          "German Shorthaired Pointer",
          "German Wirehaired Pointer",
          "Giant Schnauzer",
          "Glen of Imaal Terrier",
          "Goldador",
          "Golden Retriever",
          "Goldendoodle",
          "Gordon Setter",
          "Great Dane",
          "Great Pyrenees",
          "Greater Swiss Mountain Dog",
          "Greyhound",
          "Harrier",
          "Havanese",
          "Ibizan Hound",
          "Icelandic Sheepdog",
          "Irish Red and White Setter",
          "Irish Setter",
          "Irish Terrier",
          "Irish Water Spaniel",
          "Irish Wolfhound",
          "Italian Greyhound",
          "Jack Russell Terrier",
          "Japanese Chin",
          "Japanese Spitz",
          "Korean Jindo Dog",
          "Karelian Bear Dog",
          "Keeshond",
          "Kerry Blue Terrier",
          "Komondor",
          "Kooikerhondje",
          "Kuvasz",
          "Labradoodle",
          "Labrador Retriever",
          "Lagotto Romagnolo",
          "Lakeland Terrier",
          "Lancashire Heeler",
          "Leonberger",
          "Lhasa Apso",
          "Lowchen",
          "Maltese",
          "Maltese Shih Tzu",
          "Maltipoo",
          "Manchester Terrier",
          "Mastiff",
          "Miniature Schnauzer",
          "Mudi",
          "Mutt",
          "Neapolitan Mastiff",
          "Newfoundland",
          "Norfolk Terrier",
          "Norwegian Buhund",
          "Norwegian Elkhound",
          "Norwegian Lundehund",
          "Norwich Terrier",
          "Nova Scotia Duck Tolling Retriever",
          "Old English Sheepdog",
          "Otterhound",
          "Papillon",
          "Peekapoo",
          "Pekingese",
          "Pembroke Welsh Corgi",
          "Petit Basset Griffon Vendeen",
          "Pharaoh Hound",
          "Plott",
          "Pocket Beagle",
          "Pointer",
          "Polish Lowland Sheepdog",
          "Pomeranian",
          "Poodle",
          "Portuguese Water Dog",
          "Pug",
          "Puggle",
          "Puli",
          "Pyrenean Shepherd",
          "Rat Terrier",
          "Redbone Coonhound",
          "Rhodesian Ridgeback",
          "Rottweiler",
          "Saint Bernard",
          "Saluki",
          "Samoyed",
          "Schipperke",
          "Schnoodle",
          "Scottish Deerhound",
          "Scottish Terrier",
          "Sealyham Terrier",
          "Shetland Sheepdog",
          "Shiba Inu",
          "Shih Tzu",
          "Siberian Husky",
          "Silken Windhound",
          "Silky Terrier",
          "Skye Terrier",
          "Sloughi",
          "Small Munsterlander Pointer",
          "Soft Coated Wheaten Terrier",
          "Stabyhoun",
          "Staffordshire Bull Terrier",
          "Standard Schnauzer",
          "Sussex Spaniel",
          "Swedish Vallhund",
          "Tibetan Mastiff",
          "Tibetan Spaniel",
          "Tibetan Terrier",
          "Toy Fox Terrier",
          "Treeing Tennessee Brindle",
          "Treeing Walker Coonhound",
          "Vizsla",
          "Weimaraner",
          "Welsh Springer Spaniel",
          "Welsh Terrier",
          "West Highland White Terrier",
          "Whippet",
          "Wirehaired Pointing Griffon",
          "Xoloitzcuintli",
          "Yorkipoo",
          "Yorkshire Terrier",
          "Mixed Breed",
          "not reported"
        ],
        term: {
          description:
            "A stock of animals or plants within a species having a distinctive appearance and typically having been developed by deliberate selection.\n"
        }
      },
      cause_of_death: {
        description:
          "Text term to identify the cause of death for a patient.\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      days_to_birth: {
        description:
          "Time interval from a person\u2019s date of birth to the date of initial pathologic diagnosis, represented as a calculated negative number of days.\n",
        maximum: 0,
        minimum: -32872,
        type: "integer"
      },
      days_to_death: {
        description:
          "Time interval from a person\u2019s date of death to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
        type: "integer"
      },
      gender: {
        enum: ["female", "male", "unknown", "unspecified", "not reported"],
        term: {
          description:
            "Text designations that identify gender. Gender is described as the assemblage of properties that distinguish people on the basis of their societal roles. [Explanatory Comment 1: Identification of gender is based upon self-report and may come from a form, questionnaire, interview, etc.]\n",
          termDef: {
            cde_id: 2200604,
            cde_version: 3.0,
            source: "caDSR",
            term: "Person Gender Text Type",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2200604&version=3.0"
          }
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      subjects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: { type: ["string", "null"] },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      vital_status: {
        description:
          "The survival state of the person registered on the protocol.\n",
        type: "string"
      },
      year_of_birth: {
        term: {
          description:
            "Numeric value to represent the calendar year in which an individual was born.\n",
          termDef: {
            cde_id: 2896954,
            cde_version: 1.0,
            source: "caDSR",
            term: "Year Birth Date Number",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2896954&version=1.0"
          }
        },
        type: ["number", "null"]
      },
      year_of_death: {
        term: {
          description:
            "Numeric value to represent the year of the death of an individual.\n",
          termDef: {
            cde_id: 2897030,
            cde_version: 1.0,
            source: "caDSR",
            term: "Year Death Number",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2897030&version=1.0"
          }
        },
        type: "number"
      }
    },
    required: ["submitter_id", "type", "subjects"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Demographic",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  diagnosis: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "clinical",
    description:
      "Data from the investigation, analysis and recognition of the presence and nature of disease, condition, or injury from expressed signs and symptoms; also, the scientific determination of any kind; the concise results of such an investigation.\n",
    id: "diagnosis",
    links: [
      {
        backref: "diagnoses",
        label: "describes",
        multiplicity: "many_to_one",
        name: "subjects",
        required: true,
        target_type: "subject"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      age_at_diagnosis: {
        description:
          "Age at the time of diagnosis expressed in number of days since birth. If the age is greater than 32872 days (89 years), see 'age_at_diagnosis_gt89'.\n",
        maximum: 32872,
        minimum: 0,
        type: "integer"
      },
      age_at_diagnosis_gt89: {
        description:
          "Indicate whether the 'Age at the time of diagnosis expressed in number of days since birth' is greater than 32872 days (89 years).\n",
        enum: ["Yes", "No"]
      },
      ajcc_clinical_m: {
        description:
          "Extent of the distant metastasis for the cancer based on evidence obtained from the clinical assessment parameters determined prior to treatment.\n",
        type: "string"
      },
      ajcc_clinical_n: {
        description:
          "Extent of the regional lymph node involvement for the cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.\n",
        type: "string"
      },
      ajcc_clinical_stage: {
        description:
          "Stage group determined from clinical information on the tumor (T), regional node (N) and metastases (M) and by grouping cases with similar prognosis for cancer.\n",
        type: "string"
      },
      ajcc_clinical_t: {
        description:
          "Extent of the primary cancer based on evidence obtained from clinical assessment parameters determined prior to treatment.\n",
        type: "string"
      },
      ajcc_pathologic_m: {
        description:
          "Code to represent the defined absence or presence of distant spread or metastases (M) to locations via vascular channels or lymphatics beyond the regional lymph nodes, using criteria established by the American Joint Committee on Cancer (AJCC).\n",
        type: "string"
      },
      ajcc_pathologic_n: {
        description:
          "The codes that represent the stage of cancer based on the nodes present (N stage) according to criteria based on multiple editions of the AJCC\u2019s Cancer Staging Manual.\n",
        type: "string"
      },
      ajcc_pathologic_stage: {
        description:
          "The extent of a cancer, especially whether the disease has spread from the original site to other parts of the body based on AJCC staging criteria.\n",
        type: "string"
      },
      ajcc_pathologic_t: {
        description:
          "Code of pathological T (primary tumor) to define the size or contiguous extension of the primary tumor (T), using staging criteria from the American Joint Committee on Cancer.\n",
        type: "string"
      },
      ann_arbor_b_symptoms: {
        description:
          "Text term to signify whether lymphoma B-symptoms are present as noted in the patient\u2019s medical record.\n",
        type: "string"
      },
      ann_arbor_clinical_stage: {
        description:
          "The classification of the clinically confirmed anatomic disease extent of lymphoma (Hodgkin\u2019s and Non-Hodgkin\u2019s) based on the Ann Arbor Staging System.\n",
        type: "string"
      },
      ann_arbor_extranodal_involvement: {
        description:
          "Indicator that identifies whether a patient with malignant lymphoma has lymphomatous involvement of an extranodal site.\n",
        type: "string"
      },
      ann_arbor_pathologic_stage: {
        description:
          "The classification of the pathologically confirmed anatomic disease extent of lymphoma (Hodgkin\u2019s and Non-Hodgkin\u2019s) based on the Ann Arbor Staging System.\n",
        type: "string"
      },
      best_overall_response: {
        description:
          "The best improvement achieved throughout the entire course of protocol treatment.\n",
        type: "string"
      },
      burkitt_lymphoma_clinical_variant: {
        description:
          "Burkitt\u2019s lymphoma categorization based on clinical features that differ from other forms of the same disease.\n",
        type: "string"
      },
      cause_of_death: {
        description:
          "Text term to identify the cause of death for a patient.\n",
        type: "string"
      },
      circumferential_resection_margin: {
        description:
          "A value in millimeters indicating the measured length between a malignant lesion of the colon or rectum and the nearest radial (or circumferential) border of tissue removed during cancer surgery.\n",
        type: "string"
      },
      classification_of_tumor: {
        description:
          "Text that describes the kind of disease present in the tumor specimen as related to a specific timepoint.\n",
        type: "string"
      },
      colon_polyps_history: {
        description:
          "Yes/No indicator to describe if the subject had a previous history of colon polyps as noted in the history/physical or previous endoscopic report(s).\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      days_to_best_overall_response: {
        description:
          "Number of days between the date used for index and the date of the patient\u2019s best overall response.\n",
        type: "string"
      },
      days_to_birth: {
        description:
          "Time interval from a person\u2019s date of birth to the date of initial pathologic diagnosis, represented as a calculated negative number of days.\n",
        maximum: 0,
        minimum: -32872,
        type: "integer"
      },
      days_to_death: {
        description:
          "Time interval from a person\u2019s date of death to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
        type: "string"
      },
      days_to_diagnosis: {
        description:
          "Number of days between the date used for index and the date of diagnosis.\n",
        type: "string"
      },
      days_to_hiv_diagnosis: {
        description:
          "Time interval from the date of the initial pathologic diagnosis to the date of human immunodeficiency diagnosis, represented as a calculated number of days.\n",
        type: "string"
      },
      days_to_last_follow_up: {
        description:
          "Time interval from the date of late follow up to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
        type: "string"
      },
      days_to_last_known_disease_status: {
        description:
          "Time interval from the date of last follow up to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
        type: "string"
      },
      days_to_new_event: {
        description:
          "Time interval from the date of new tumor event including progression, recurrence and new primary malignancies to the date of initial pathologic diagnosis, represented as a calculated number number of days.\n",
        type: "string"
      },
      days_to_recurrence: {
        description:
          "Number of days between the date used for index and the date the patient was diagnosed with a recurrent malignancy.\n",
        type: "string"
      },
      figo_stage: {
        description:
          "The extent of a cervical or endometrial cancer within the body, especially whether the disease has spread from the original site to other parts of the body, as described by the International Federation of Gynecology and Obstetrics (FIGO) stages.\n",
        type: "string"
      },
      hist_subtype1: {
        description: "Subtype of the microscopic structure of tissues\n",
        type: "string"
      },
      histology: {
        description: "Result of the microscopic structure of tissues\n",
        type: "string"
      },
      hiv_positive: {
        description:
          "Text term to signify whether a physician has diagnosed HIV infection in a patient.\n",
        type: "string"
      },
      hpv_positive_type: {
        description:
          "Text classification to represent the strain or type of human papillomavirus identified in an individual.\n",
        type: "string"
      },
      hpv_status: {
        description: "The findings of the oncogenic HPV.\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      iss_stage: {
        description: "The multiple myeloma disease stage at diagnosis.\n",
        type: "string"
      },
      last_known_disease_status: {
        description:
          "Text term that describes the last known state or condition of an individual\u2019s neoplasm.\n",
        type: "string"
      },
      laterality: {
        description:
          "For tumors in paired organs, designates the side on which the cancer originates.\n",
        type: "string"
      },
      ldh_level_at_diagnosis: {
        description:
          "The 2 decimal place numeric laboratory value measured, assigned or computed related to the assessment of lactate dehydrogenase in a specimen.\n",
        type: "string"
      },
      ldh_normal_range_upper: {
        description:
          "The top value of the range of statistical characteristics that are supposed to represent accepted standard, non-pathological pattern for lactate dehydrogenase (units not specified).\n",
        type: "string"
      },
      lymph_nodes_positive: {
        description:
          "The number of lymph nodes involved with disease as determined by pathologic examination.\n",
        type: "string"
      },
      lymphatic_invasion_present: {
        description:
          "A yes/no indicator to ask if small or thin-walled vessel invasion is present, indicating lymphatic involvement.\n",
        type: "string"
      },
      method_of_diagnosis: {
        description:
          "The method used to initially determine the patient\u2019s diagnosis.\n",
        type: "string"
      },
      morphology: {
        description:
          "The third edition of the International Classification of Diseases for Oncology, published in 2000 used principally in tumor and cancer registries for coding the site (topography) and the histology (morphology) or neoplasms. The study of the structure of the cells and their arrangement to constitute tissues and, finally, the association among these to form organs. In pathology, the microscopic process or identifying normal and abnormal morphologic characteristics in tissues, by employing various cytochemical and immunocytochemical stains. A system of numbered categories for representation of data.\n",
        type: "string"
      },
      new_event_anatomic_site: {
        description:
          "Text term to specify the anatomic location of the return of tumor after treatment.\n",
        type: "string"
      },
      new_event_type: {
        description: "Text term to identify a new tumor event.\n",
        type: "string"
      },
      overall_survival: {
        description:
          "Number of days between the date used for index and the patient\u2019s date of death or the date the patient was last known to be alive.\n",
        type: "string"
      },
      perineural_invasion_present: {
        description:
          "A yes/no indicator to ask if perineural invasion or inflitration of tumor or cancer is present.\n",
        type: "string"
      },
      primary_diagnosis: {
        description:
          "Text term for the structural pattern of cancer cells used to define a microscopic diagnosis.\n",
        type: "string"
      },
      prior_malignancy: {
        description:
          "Text term to describe the patient\u2019s history of prior cancer diagnosis and the spatial location of any previous cancer occurrence.\n",
        type: "string"
      },
      prior_treatment: {
        description:
          "A yes/no/unknown/not applicable indicator related to the administration of therapeutic agents received before the body specimen was collected.\n",
        type: "string"
      },
      progression_free_survival: {
        description:
          "Number of days between the date used for index and the first date the patient is known to be free of disease progression.\n",
        type: "string"
      },
      progression_free_survival_event: {
        description:
          "The event used to define the patient\u2019s disease progression.\n",
        type: "string"
      },
      progression_or_recurrence: {
        description:
          "Yes/No/Unknown indicator to identify whether a patient has had a new tumor event after initial treatment.\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      residual_disease: {
        description:
          "Text terms to describe the status of a tissue margin following surgical resection.\n",
        type: "string"
      },
      site_of_resection_or_biopsy: {
        description:
          "The third edition of the International Classification of Diseases for Oncology, published in 2000, used principally in tumor and cancer registries for coding the site (topography) and the histology (morphology) of neoplasms. The description of an anatomical region or of a body part. Named locations of, or within, the body. A system of numbered categories for representation of data.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      subjects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      tissue_or_organ_of_origin: {
        description:
          "Text term that describes the anatomic site of the tumor or disease.\n",
        type: "string"
      },
      tumor_grade: {
        description:
          "Numeric value to express the degree of abnormality of cancer cells, a measure of differentiation and aggressiveness.\n",
        type: "string"
      },
      tumor_stage: {
        description:
          "The extent of a cancer in the body. Staging is usually based on the size of the tumor, whether lymph nodes contain cancer, and whether the cancer has spread from the original site to other parts of the body. The accepted values for tumor_stage depend of the tumor site, type, and accepted staging system. These items should accompany the tumor_stage value as associated metadata.\n",
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      vascular_invasion_present: {
        description:
          "The yes/no indicator to ask if large vessel or venous invasion was detected by surgery or presence in a tumor specimen.\n",
        type: "string"
      },
      vital_status: {
        description:
          "The survival state of the person registered on the protocol.\n",
        type: "string"
      },
      year_of_diagnosis: {
        description:
          "Numeric value to represent the year of an individual\u2019s initial pathologic diagnosis of cancer.\n",
        type: "string"
      }
    },
    required: [
      "submitter_id",
      "type",
      "subjects",
      "last_known_disease_status",
      "morphology",
      "primary_diagnosis",
      "progression_or_recurrence",
      "site_of_resection_or_biopsy",
      "tissue_or_organ_of_origin",
      "tumor_grade",
      "tumor_stage",
      "vital_status"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Diagnosis",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  drug_attribute: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "clinical",
    description:
      "Information of the drugs used for drug response investigation\n",
    id: "drug_attribute",
    links: [
      {
        backref: "drug_attributes",
        label: "records_for",
        multiplicity: "one_to_many",
        name: "summary_drug_responses",
        required: true,
        target_type: "summary_drug_response"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      brand_name: {
        description: "brand name under which the drug is sold\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      drug_class: { description: "Drug classification\n", type: "string" },
      drug_mechanism: {
        description: "The mechanism of how the drug take effect\n",
        type: "string"
      },
      highest_phase: {
        description: "The highest phase of clinical research for the drug\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      organization: {
        description: "The organization produces the drug\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      summary_drug_responses: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      target_molecule: {
        description:
          "the native protein in the body whose activity is modified by a drug resulting in a specific effect, which may be a desirable therapeutic effect or an unwanted adverse effect.\n",
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "summary_drug_responses"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Drug Attribute",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  drug_response: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "clinical",
    description:
      "Data from the investigation, analysis and recognition of the relationship between drug dosage and drug activity; the concise results of such an investigation.\n",
    id: "drug_response",
    links: [
      {
        backref: "drug_responses",
        label: "records_for",
        multiplicity: "many_to_one",
        name: "summary_drug_responses",
        required: true,
        target_type: "summary_drug_response"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      activity_sd: {
        description: "Standard diviation of drug activity\n",
        type: "number"
      },
      compound: {
        description: "Ingredients of a medication\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      dose: {
        description: "Drug dosage administrated in uM\n",
        type: "number"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      median_activity: {
        description: "Median value of drug activity\n",
        type: "number"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      summary_drug_responses: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "summary_drug_responses"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Drug Response",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  follow_up: {
    additionalProperties: false,
    category: "clinical",
    description:
      "A visit by a patient or study participant to a medical professional. A clinical encounter that encompasses planned and unplanned trial interventions, procedures and assessments that may be performed on a subject. A visit has a start and an end, each described with a rule. The process by which information about the health status of an individual is obtained before and after a study has officially closed; an activity that continues something that has already begun or that repeats something that has already been done.\n",
    id: "follow_up",
    links: [
      {
        backref: "follow_ups",
        label: "describes",
        multiplicity: "many_to_one",
        name: "subjects",
        required: true,
        target_type: "subject"
      },
      {
        backref: "follow_ups",
        label: "data_from",
        multiplicity: "many_to_one",
        name: "studies",
        required: false,
        target_type: "study"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      age_at_visit: {
        description:
          "Age at visit in years - round to nearest integer. If the age in years at the visit is greater than 89, see 'age_at_visit_gt89'.\n",
        maximum: 89,
        minimum: 0,
        type: ["integer", "null"]
      },
      age_at_visit_gt89: {
        description: "Indicate if the age at visit years is greater than 89.\n",
        enum: ["Yes", "No"]
      },
      bmi: {
        description:
          "The body mass divided by the square of the body height expressed in units of kg/m^2.",
        type: "number"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      days_to_follow_up: {
        description:
          "Number of days between the date used for index and the date the patient was seen or contacted at follow-up.\n",
        type: "integer"
      },
      drug_used: {
        description:
          "Ever used any medical or recreational drugs since last visit\n",
        enum: ["No", "Yes", "Refusal", "Unknown"]
      },
      ever_transferred: {
        description: "Participant ever transferred sites (changed ids)\n",
        enum: ["Never transferred", "Transferred"]
      },
      health_insurance: {
        description: "Currently have any health insurance\n",
        type: "boolean"
      },
      height: {
        description: "The height of the patient in centimeters.",
        maximum: 500,
        minimum: 0,
        type: ["number", "null"]
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      pregnancy_status: {
        description:
          "Is the participant pregnant (women) or has been pregnant since the last visit\n",
        type: "boolean"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      studies: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      subjects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      tint: {
        description: "6-month time interval for visit\n",
        type: "integer"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      version_data: { description: "Version number of data\n", type: "string" },
      visit_date: { description: "Year of the visit.\n", type: "integer" },
      visit_id: {
        description: "ID at time of interview (prior to transfer)\n",
        type: "integer"
      },
      visit_name: { description: "Visit ID (string)\n", type: "string" },
      visit_number: { description: "Visit number\n", type: "integer" },
      visit_type: {
        description:
          "Define if the visit is a follow-up or the baseline visit.\n",
        enum: [
          "Baseline Visit",
          "Follow-up Visit",
          "Abbreviated Visit (Record in ABRV file)"
        ]
      },
      weight: {
        description: "The weight of the subject measured in grams.\n",
        type: "number"
      },
      weight_percentage: {
        description:
          "The percentage of the weight considering the weight measured at the index date as the reference.\n",
        type: "number"
      }
    },
    required: ["submitter_id", "type", "subjects"],
    schema: "http://json-schema.org/draft-04/schema#",
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Follow Up",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  gene_expression: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "Data file containing gene expression information generated internally by the GTEx.\n",
    id: "gene_expression",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "gene_expressions",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "gene_expressions",
            label: "derived_from",
            multiplicity: "many_to_many",
            name: "submitted_aligned_reads_files",
            required: false,
            target_type: "submitted_aligned_reads"
          },
          {
            backref: "gene_expressions",
            label: "derived_from",
            multiplicity: "many_to_many",
            name: "mrna_microarrays",
            required: false,
            target_type: "mrna_microarray"
          },
          {
            backref: "gene_expressions",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "rna_expression_workflows",
            required: false,
            target_type: "rna_expression_workflow"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Transcriptome Profiling"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["TXT", "TSV", "CSV", "GCT", "RES", "TDF", "GCTX"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: [
          "Gene Expression Quantification",
          "Gene Expression Normalization"
        ],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["RNA-Seq", "Total RNA-Seq", "Microarray"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      mrna_microarrays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      rna_expression_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "md5sum",
      "data_category",
      "data_type",
      "data_format",
      "experimental_strategy"
    ],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Gene Expression",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  genotyping_array: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "DNA array data files contain information on genome-wide SNP and genetic variant for genetic studies.",
    id: "genotyping_array",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "genotyping_arrays",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "genotyping_arrays",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "aliquots",
            required: false,
            target_type: "aliquot"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Genotyping Array Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["IDAT", "GTC", "GCT", "CEL"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Genotyping Raw Intensity"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["Genotyping Array"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      plat: {
        description:
          "Plat number for which plate the genotyping is performed\n",
        type: "integer"
      },
      platform: {
        enum: [
          "Illumina OMNI 5M SNP Array",
          "Illumina OMNI 2.5M SNP Array",
          "Illumina Infinium 20K Canine SNP Beadchip",
          "Illumina CanineHD BeadChip",
          "Affymetrix GeneChip Canine Genome Array",
          "Axiom Canine Genotyping Array",
          "Illumina CanineSNP20 BeadChip"
        ],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_category",
      "data_type",
      "data_format",
      "experimental_strategy",
      "md5sum",
      "platform"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Genotyping Array",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  genotyping_array_workflow: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "analysis",
    description:
      "Metadata for the Genotyping array workflow used to generate aggregated genotyping callset or tangent copy number variation.\n",
    id: "genotyping_array_workflow",
    links: [
      {
        exclusive: true,
        required: true,
        subgroup: [
          {
            backref: "genotyping_array_workflows",
            label: "performed_on",
            multiplicity: "many_to_many",
            name: "genotyping_arrays",
            required: false,
            target_type: "genotyping_array"
          },
          {
            backref: "genotyping_array_workflows",
            label: "performed_on",
            multiplicity: "many_to_many",
            name: "aggregated_genotyping_arrays",
            required: false,
            target_type: "aggregated_genotyping_array"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aggregated_genotyping_arrays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      genotyping_arrays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_type: {
        enum: ["Birdseed Genotyping"],
        term: {
          description:
            "Generic name for the workflow used to analyze a data set.\n"
        }
      },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    },
    required: ["submitter_id", "type", "workflow_type"],
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Genotyping Array Workflow",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  keyword: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description: "A keyword for a project.",
    id: "keyword",
    links: [
      {
        backref: "keywords",
        label: "describe",
        multiplicity: "many_to_many",
        name: "projects",
        required: true,
        target_type: "project"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      keyword_name: { description: "The name of the keyword.", type: "string" },
      project_id: { type: "string" },
      projects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                code: { type: "string" },
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: { type: ["string", "null"] },
      type: { enum: ["keyword"] },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "projects"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Keyword",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  metaschema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    allOf: [{ $ref: "http://json-schema.org/draft-04/schema#" }],
    definitions: {
      link: {
        additionalProperties: false,
        properties: {
          backref: { $ref: "#/field" },
          label: { $ref: "#/field" },
          multiplicity: {
            enum: ["one_to_one", "one_to_many", "many_to_one", "many_to_many"],
            type: "string"
          },
          name: { $ref: "#/field" },
          required: { type: "boolean" },
          target_type: { $ref: "#/field" }
        },
        required: [
          "name",
          "target_type",
          "backref",
          "label",
          "multiplicity",
          "required"
        ],
        type: "object"
      },
      link_subgroup: {
        properties: {
          exclusive: { type: "boolean" },
          required: { type: "boolean" },
          subgroup: {
            items: {
              oneOf: [
                { $ref: "#/definitions/link" },
                { $ref: "#/definitions/link_subgroup" }
              ]
            },
            type: "array"
          }
        },
        required: ["exclusive", "required", "subgroup"]
      },
      validator_def: {
        properties: {
          link_to_type: { type: "string" },
          multiplicity: {
            enum: ["one_to_one", "one_to_many", "many_to_one", "many_to_many"],
            type: "string"
          }
        },
        required: ["property", "function"],
        title: "Define a validator to be used on a property",
        type: "object"
      }
    },
    field: { pattern: "^[_a-zA-Z0-9]*$", type: "string" },
    id: "metaschema",
    properties: {
      category: {
        $ref: "#/field",
        enum: [
          "administrative",
          "analysis",
          "biospecimen",
          "clinical",
          "data",
          "data_bundle",
          "data_file",
          "index_file",
          "metadata_file",
          "notation",
          "qc_bundle",
          "TBD"
        ]
      },
      links: {
        items: {
          oneOf: [
            { $ref: "#/definitions/link" },
            { $ref: "#/definitions/link_subgroup" }
          ]
        },
        title: "Define a link to other GDC entities",
        type: "array"
      },
      properties: {
        additionalProperties: false,
        patternProperties: { "^[_a-zA-Z0-9]*$": { type: "object" } },
        type: "object"
      },
      submittable: { type: "boolean" },
      system_properties: { type: "array" },
      unique_keys: {
        items: { items: { type: "string" }, type: "array" },
        type: "array"
      },
      validators: {
        items: { $ref: "#/definitions/validator_def" },
        type: ["array", "null"]
      }
    },
    required: [
      "category",
      "program",
      "project",
      "uniqueKeys",
      "links",
      "validators",
      "systemProperties",
      "id"
    ],
    title: "GDC JSON schema extension"
  },
  mirna_microarray: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing raw miRNA microarray intensity.\n",
    id: "mirna_microarray",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "mirna_microarrays",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "mirna_microarrays",
            label: "data_for",
            multiplicity: "one_to_one",
            name: "aliquots",
            required: false,
            target_type: "aliquot"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Transcriptome Profiling"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["TXT", "TSV", "CSV"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["miRNA Expression Quantification"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["RNA-microarray"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_format",
      "md5sum",
      "data_category",
      "data_type",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "miRNA Microarray",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  mrna_microarray: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing raw mRNA microarray intensity.\n",
    id: "mrna_microarray",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "mRNA_microarrays",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "mRNA_microarrays",
            label: "data_for",
            multiplicity: "one_to_one",
            name: "aliquots",
            required: false,
            target_type: "aliquot"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      array_platform: {
        description: "Type of the CHIP used for microarray\n",
        type: "string"
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Transcriptome Profiling"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["TXT", "TSV", "CSV", "CEL"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["mRNA Expression Quantification"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["RNA-microarray"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_format",
      "md5sum",
      "data_category",
      "data_type",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "mRNA Microarray",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  mzml_protein_mass_spectrometry: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing mzml protein mass spectrometry data\n",
    id: "mzml_protein_mass_spectrometry",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "mzml_protein_mass_spectrometryies",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "mzml_protein_mass_spectrometryies",
            label: "derived_from",
            multiplicity: "many_to_one",
            name: "raw_protein_mass_spectrometries",
            required: false,
            target_type: "raw_protein_mass_spectrometry"
          },
          {
            backref: "mzml_protein_mass_spectrometryies",
            label: "derived_from",
            multiplicity: "many_to_one",
            name: "proteomic_workflows",
            required: false,
            target_type: "proteomic_workflow"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        description: "Broad categorization of the contents of the data file.\n",
        enum: ["Proteome"]
      },
      data_format: {
        description: "Format of the data files.\n",
        enum: ["TXT", "TSV", "CSV", "GCT", "RAW", "MZID.GZ", "MZML.GZ"]
      },
      data_type: {
        description: "Specific content type of the data file.\n",
        type: "string"
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        description:
          "The sequencing strategy used to generate the data file.\n",
        enum: ["TMT10", "iTRAQ4", "Label Free"]
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      original_file_name: {
        description:
          "Original file name in https://cptc-xfer.uis.georgetown.edu/publicData/Phase_II_Data/CPTAC_Breast_Cancer_S039\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      proteomic_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      raw_protein_mass_spectrometries: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "data_type",
      "md5sum",
      "file_size",
      "data_format",
      "data_category",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "MZML Protein Mas Spectrometry",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  oncomap_assay: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "notation",
    description:
      "Genotyping results applying the high throughput genotyping platform OncoMap\n",
    id: "oncomap_assay",
    links: [
      {
        backref: "oncomap_assays",
        label: "describes",
        multiplicity: "many_to_one",
        name: "aliquots",
        required: true,
        target_type: "aliquot"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      chromosome: {
        description:
          "A DNA molecule with part or all of the genetic material of an organism\n",
        type: "string"
      },
      cohort_center: {
        description: "Center where the cohort of the assay performed\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      end_position: {
        description: "The end position on a chromosome\n",
        type: "number"
      },
      hugo_symbol: {
        description:
          "Gene symbols defined by hugo gene nomenclature committee\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      ncbi_build_version: {
        description:
          "NCBI release of assemblies made from contiguous sequences assembled in what is thought to be chromosomal order\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      reference_allele: {
        description:
          "A given SNP refers to the nucleotide base on the NCBI\u00a0reference\u00a0assembly at the SNP's position\n",
        type: "string"
      },
      sequencing_phase: {
        description: "The phase of the batch of sequencing for the project\n",
        type: "string"
      },
      start_position: {
        description: "The strat position on a chromosom\n",
        type: "number"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      strand: {
        description:
          "\u00a0The two strands of DNA -- the strand that is copied into mRNA and subsequently translated has the complementary sequence to the mRNA, while the base sequence of the opposite strand directly corresponds to the codons in the mRNA\n",
        enum: ["+", "-"]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      tumor_seq_allele1: {
        description: "The first allele sequenced in tumor cell line\n",
        type: "string"
      },
      tumor_seq_allele2: {
        description: "The second allele sequenced in tumor cell line\n",
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      variant_classfication: {
        description: "Type of consequence introduced by variant allele\n",
        enum: [
          "Missense_Mutation",
          "In_Frame_Del",
          "Frame_Shift_Del",
          "Nonsense_Mutation",
          "Frame_Shift_Ins",
          "In_Frame_Ins",
          "Silent"
        ]
      }
    },
    required: ["submitter_id", "type", "aliquots"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Oncomap Assay",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  oncomap_panel: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "notation",
    description: "Probes information for oncomap platform\n",
    id: "oncomap_panel",
    links: [
      {
        backref: "oncomap_panels",
        label: "records_for",
        multiplicity: "one_to_many",
        name: "oncomap_assays",
        required: true,
        target_type: "oncomap_assay"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      alternative_allele: {
        description:
          "Refers to any base, other than the reference, that is found at that locus\n",
        type: "string"
      },
      annotation_transcript: {
        description: "Transcript UCSC ID\n",
        type: "string"
      },
      assay_direction: {
        description: "Extention direction of the assay\n",
        type: "string"
      },
      cDNA_change: {
        description: "Reference allele to alternative allele change in cDNA\n",
        type: "string"
      },
      codon_change: {
        description: "Reference allele to alternative allele change in coden\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      dbSNP_rs: {
        description: "RS number in dbSNP database\n",
        type: "string"
      },
      dbSNP_validation: {
        description: "Validation resource for the dbSNP database\n",
        type: "string"
      },
      entrez_id: {
        description: "Gene ID defined in NCBI's database\n",
        type: "string"
      },
      gene_description: {
        description:
          "Description of the gene where the alternative allele locate\n",
        type: "string"
      },
      genomie_change: {
        description: "The reference and alternative allele in genome build\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      oncomap_assays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      other_transcripts: {
        description:
          "Other transcrips changes introduced by the alternative allele\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      protein_change: {
        description:
          "Reference allele to alternative allele change in protein\n",
        type: "string"
      },
      reference_allele: {
        description:
          "A given SNP refers to the nucleotide base on the NCBI\u00a0reference\u00a0assembly at the SNP's position\n",
        type: "string"
      },
      refseq_mRNA_id: {
        description: "mRNA ID refered in Refseq database\n",
        type: "string"
      },
      refseq_protein_id: {
        description: "Protein ID refered in Refseq database\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      swissprot_accession_id: {
        description: "Accession ID in SwissProt database\n",
        type: "string"
      },
      swissprot_entry_id: {
        description: "Enrty ID in SwissProt database\n",
        type: "string"
      },
      transcript_strand: {
        description: "Strand where the transcript locate\n",
        enum: ["+", "-"]
      },
      type: { type: "string" },
      uniProt_region: {
        description: "The region in Uniprot database\n",
        type: "string"
      },
      unitport_amino_acid_position: {
        description: "The amino acid position in UniProt database\n",
        type: "string"
      },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      variant_type: {
        description: "The type of allele\n",
        enum: ["SNP", "DEL", "TNP", "INS", "DNP", "ONP"]
      },
      variation_allele: {
        description: "Variation extension allele\n",
        type: "string"
      },
      wildtype_allele: {
        description: "Wild type extension allele\n",
        type: "string"
      }
    },
    required: ["submitter_id", "type", "oncomap_assays"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Oncomap Panel",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  program: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description: "A broad framework of goals to be achieved. (NCIt C52647)\n",
    id: "program",
    links: [],
    program: "*",
    project: "*",
    properties: {
      dbgap_accession_number: {
        description: "The dbgap accession number provided for the program.",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      name: { description: "Full name/title of the program.", type: "string" },
      type: { type: "string" }
    },
    required: ["name", "dbgap_accession_number"],
    submittable: false,
    systemProperties: ["id"],
    title: "Program",
    type: "object",
    uniqueKeys: [["id"], ["name"]],
    validators: null
  },
  project: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    constraints: null,
    description:
      "Any specifically defined piece of work that is undertaken or attempted to meet a single requirement. (NCIt C47885)\n",
    id: "project",
    links: [
      {
        backref: "projects",
        label: "member_of",
        multiplicity: "many_to_one",
        name: "programs",
        required: true,
        target_type: "program"
      }
    ],
    program: "*",
    project: "*",
    properties: {
      availability_mechanism: {
        description: "Mechanism by which the project will be made avilable.",
        type: "string"
      },
      availability_type: {
        description: "Is the project open or restricted?",
        enum: ["Open", "Restricted"]
      },
      code: {
        description: "Unique identifier for the project.",
        type: "string"
      },
      date_collected: {
        description:
          "The date or date range in which the project data was collected.",
        type: "string"
      },
      dbgap_accession_number: {
        description: "The dbgap accession number provided for the project.",
        type: "string"
      },
      id: {
        description: "UUID for the project.",
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      intended_release_date: {
        description: "Tracks a Project's intended release date.",
        format: "date-time",
        type: "string"
      },
      investigator_affiliation: {
        description:
          "The investigator's affiliation with respect to a research institution.",
        type: "string"
      },
      investigator_name: {
        description: "Name of the principal investigator for the project.",
        type: "string"
      },
      name: {
        description: "Display name/brief description for the project.",
        type: "string"
      },
      programs: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ],
        description:
          "Indicates that the project is logically part of the indicated project.\n"
      },
      releasable: {
        default: false,
        description:
          "A project can only be released by the user when `releasable` is true.\n",
        type: "boolean"
      },
      released: {
        default: false,
        description:
          "To release a project is to tell the GDC to include all submitted entities in the next GDC index.\n",
        type: "boolean"
      },
      state: {
        default: "open",
        description:
          "The possible states a project can be in.  All but `open` are equivalent to some type of locked state.\n",
        enum: ["open", "review", "submitted", "processing", "closed", "legacy"]
      },
      support_id: {
        description: "The ID of the source providing support/grant resources.",
        type: "string"
      },
      support_source: {
        description: "The name of source providing support/grant resources.",
        type: "string"
      },
      type: { type: "string" }
    },
    required: ["code", "name", "programs", "dbgap_accession_number"],
    submittable: true,
    systemProperties: [
      "id",
      "state",
      "released",
      "releasable",
      "intended_release_date"
    ],
    title: "Project",
    type: "object",
    uniqueKeys: [["id"], ["code"]],
    validators: null
  },
  protein_expression: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing normalized protein expression data\n",
    id: "protein_expression",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "protein_expressions",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "protein_expressions",
            label: "derived_from",
            multiplicity: "many_to_many",
            name: "raw_protein_mass_spectrometries",
            required: false,
            target_type: "raw_protein_mass_spectrometry"
          },
          {
            backref: "protein_expressions",
            label: "derived_from",
            multiplicity: "many_to_one",
            name: "proteomic_workflows",
            required: false,
            target_type: "proteomic_workflow"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        description: "Broad categorization of the contents of the data file.\n",
        enum: ["Proteome"]
      },
      data_format: {
        description: "Format of the data files.\n",
        enum: ["TXT", "TSV", "CSV", "GCT", "RAW", "MZID.GZ", "MZML.GZ"]
      },
      data_type: {
        description: "Specific content type of the data file.\n",
        type: "string"
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        description:
          "The sequencing strategy used to generate the data file.\n",
        enum: ["TMT10", "iTRAQ4", "Label Free"]
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      original_file_name: {
        description:
          "Original file name in https://cptc-xfer.uis.georgetown.edu/publicData/Phase_II_Data/CPTAC_Breast_Cancer_S039\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      proteomic_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      raw_protein_mass_spectrometries: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "data_type",
      "md5sum",
      "file_size",
      "data_format",
      "data_category",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Protein Expression",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  proteomic_workflow: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "analysis",
    description:
      "Metadata for the protein mass spectrometry workflow used to quantify protein expression\n",
    id: "proteomic_workflow",
    links: [
      {
        backref: "proteomic_workflows",
        label: "performed_on",
        multiplicity: "one_to_many",
        name: "raw_protein_mass_spectrometries",
        required: true,
        target_type: "raw_protein_mass_spectrometry"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      cdap_reports: {
        description:
          "Name and version of the tool used to generate protein summary reports.\n",
        type: "string"
      },
      cptac_dcc_mzidentml: {
        description:
          "Name and version of the tool used to generate mzIdentML from the peptide spectral match report.\n",
        type: "string"
      },
      cptac_dcc_tools: {
        description:
          "Name and version of the custom scripts used in the data analysis pipeline.\n",
        type: "string"
      },
      cptac_galaxy_tools: {
        description:
          "Name and version of the custom scripts used in the data analysis pipeline.\n",
        type: "string"
      },
      cptac_galaxy_workflows: {
        description:
          "Name and version of the workflow of data analysis pipeline.\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      gene_to_prot: {
        description:
          "Name and version of the tool used to map gene to protein in the data analysis pipeline.\n",
        type: "string"
      },
      hgnc_version: {
        description:
          "Name and version of HGNC database of human gene names used in the data analysis pipeline.\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      ms1_data_analysis: {
        description:
          "Name and version of the tool used for MS1 data analysis.\n",
        type: "string"
      },
      mzidentml_refseq: {
        description:
          "Name and version of the NCBI Refseq database used in mzIdentML.\n",
        type: "string"
      },
      mzidentml_uniprot: {
        description:
          "Name and version of the Uniprot Refseq database used in mzIdentiML.\n",
        type: "string"
      },
      phosphosite_localization: {
        description:
          "Name and version of the tool used for phosphosite localization.\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      psm_report_generation: {
        description:
          "Name and version of the tool used to peptide spectral match report generation.\n",
        type: "string"
      },
      raw_data_conversion: {
        description:
          "Name and version of the tool used to convert the proprietary data into open format.\n",
        type: "string"
      },
      raw_data_processing: {
        description:
          "Name and version of the tool used to process the proprietary raw data.\n",
        type: "string"
      },
      raw_protein_mass_spectrometries: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      refseq_database_version: {
        description:
          "Name and version of the NCBI Refseq database used in the data analysis pipeline.\n",
        type: "string"
      },
      search_database_parameters: {
        description:
          "Parameters used in the peptide identification database search.\n",
        type: "string"
      },
      sequence_database_search: {
        description:
          "Name and version of the tool used in peptide identification by scoring MS/MS spectra against peptides derived from a protein sequence database.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      uniport_database_version: {
        description:
          "Name and version of the Uniprot Refseq database used in the data analysis pipeline.\n",
        type: "string"
      },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "raw_protein_mass_spectrometries"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Proteomic Workflow",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  protocol: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description:
      "The formal plan of an experiment or research activity, including the objective, rationale, design, materials and methods for the conduct of the study; intervention description, and method of data analysis. (NCIt - C70817)\n",
    id: "protocol",
    links: [
      {
        backref: "protocols",
        label: "derived_from",
        multiplicity: "many_to_many",
        name: "studies",
        required: true,
        target_type: "study"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      acquisition_type: {
        description:
          "Mass Spectrometry: Mass spectrometry acquisition method.\n",
        type: "string"
      },
      alkylation_reagent: {
        description: "Sample Preparation: Reagent used for alkylation.\n",
        type: "string"
      },
      amount_on_column: {
        description: "Liquid Chromatography: approximate mass with units.\n",
        type: "string"
      },
      chromatographic_dimension: {
        description: "Liquid Chromatography: dimension ordinal.\n",
        type: "integer"
      },
      chromatography_dimensions_count: {
        description:
          "Sample Preparation: Number of discrete chromatographic dimensions used.\n",
        type: "integer"
      },
      chromatography_type: {
        description: "Liquid Chromatography: General type of chromatography.\n",
        type: "string"
      },
      collision_energy: {
        description: "Mass Spectrometry: normalized collisions energy (%).\n",
        type: "string"
      },
      column_inner_diameter: {
        description: "Liquid Chromatography: with units.\n",
        type: "string"
      },
      column_length: {
        description: "Liquid Chromatography: with units.\n",
        type: "string"
      },
      column_type: {
        description: "Liquid Chromatography: Type of column used.\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      dda_topn: {
        description:
          "Mass Spectrometry: number of precursors sampled per cycle.\n",
        type: "string"
      },
      dia_ims: {
        description: "Mass Spectrometry: Uses ion mobility separation.\n",
        type: "boolean"
      },
      dia_multiplexing: {
        description: "Mass Spectrometry: Uses MSX.\n",
        type: "boolean"
      },
      digestion_reagent: {
        description:
          "Sample Preparation: Enzyme or reagent used for digestion. If multiple used list 2 separated by (;).\n",
        type: "string"
      },
      dissociation_type: {
        description: "Mass Spectrometry: gas phase dissociation type.\n",
        type: "string"
      },
      document_name: {
        description:
          "Sample Preparation: External Analytical sample protocol document name.\n",
        type: "string"
      },
      enrichment_strategy: {
        description:
          "Sample Preparation: Type of peptide or protein enrichment.\n",
        type: "string"
      },
      fractions_produced_count: {
        description:
          "Sample Preparation: Final number of fractions produced following any pooling, for example.\n",
        type: "string"
      },
      gradient_length: {
        description: "Liquid Chromatography: time with units.\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      instrument_make: {
        description: "Mass Spectrometry: Manufacturer of instrument.\n",
        type: "string"
      },
      instrument_model: {
        description: "Mass Spectrometry: Model of instrument.\n",
        type: "string"
      },
      instrument_serial_number: {
        description:
          "Mass Spectrometry: serial number from instrument used in study.\n",
        type: "string"
      },
      isobaric_labeling_reagent: {
        description:
          "Sample Preparation: Reagent used for isobaric labeling.\n",
        type: "string"
      },
      label_free_quantitation: {
        description:
          "Sample Preparation: type of label free data analysis strategy proposed for this data.\n",
        type: "string"
      },
      labeled_quantitation: {
        description: "Sample Preparation: type of labeling used.\n",
        type: "string"
      },
      labeling_strategy: {
        description:
          "Sample Preparation: general strategy used for differential analysis.\n",
        type: "string"
      },
      ms1_resolution: {
        description:
          "Mass Spectrometry: MS1 resolution, typically at 400 m/z.\n",
        type: "integer"
      },
      ms2_resolution: {
        description:
          "Mass Spectrometry: MS2 resolution, typically at 400 m/z.\n",
        type: "integer"
      },
      particle_size: {
        description: "Liquid Chromatography: with units.\n",
        type: "string"
      },
      particle_type: {
        description:
          "Liquid Chromatography: manufacturer or brand name of particle if applicable.\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      protocol_date: {
        description:
          "Sample Preparation: External analytical sample protocol create or update date.\n",
        type: "string"
      },
      protocol_document_name: {
        description:
          "Liquid Chromatography: External chromatography protocol document name.\n",
        type: "string"
      },
      protocol_name: {
        description:
          "Sample Preparation: External Analytical sample protocol name.\n",
        type: "string"
      },
      protocol_type: {
        description:
          "Mass Spectrometry: Controlled Vocabulary can suggest new terms if needed.\n",
        type: "string"
      },
      starting_amount: {
        description: "Sample Preparation: Mass with units.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      studies: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "studies"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Protocol",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  psm_protein_mass_spectrometry: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing psm protein mass spectrometry data\n",
    id: "psm_protein_mass_spectrometry",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "psm_protein_mass_spectrometries",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "psm_protein_mass_spectrometries",
            label: "derived_from",
            multiplicity: "many_to_one",
            name: "raw_protein_mass_spectrometries",
            required: false,
            target_type: "raw_protein_mass_spectrometry"
          },
          {
            backref: "psm_protein_mass_spectrometries",
            label: "derived_from",
            multiplicity: "many_to_one",
            name: "proteomic_workflows",
            required: false,
            target_type: "proteomic_workflow"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        description: "Broad categorization of the contents of the data file.\n",
        enum: ["Proteome"]
      },
      data_format: {
        description: "Format of the data files.\n",
        enum: ["TXT", "TSV", "CSV", "GCT", "RAW", "MZID.GZ", "MZML.GZ"]
      },
      data_type: {
        description: "Specific content type of the data file.\n",
        type: "string"
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        description:
          "The sequencing strategy used to generate the data file.\n",
        enum: ["TMT10", "iTRAQ4", "Label Free"]
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      original_file_name: {
        description:
          "Original file name in https://cptc-xfer.uis.georgetown.edu/publicData/Phase_II_Data/CPTAC_Breast_Cancer_S039\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      proteomic_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      raw_protein_mass_spectrometries: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "data_type",
      "md5sum",
      "file_size",
      "data_format",
      "data_category",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "PSM Protein Mass Spectrometry",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  publication: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description: "Publication for a project.",
    id: "publication",
    links: [
      {
        backref: "publications",
        label: "refers_to",
        multiplicity: "many_to_many",
        name: "projects",
        required: true,
        target_type: "project"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      doi: { type: "string" },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      pmid: { type: "string" },
      project_id: { type: "string" },
      projects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                code: { type: "string" },
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: { type: ["string", "null"] },
      type: { enum: ["publication"] },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "projects"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Publication",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  raw_protein_mass_spectrometry: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing raw protein mass spectrometry data\n",
    id: "raw_protein_mass_spectrometry",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "raw_protein_mass_spectrometries",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "raw_protein_mass_spectrometries",
            label: "data_for",
            multiplicity: "many_to_many",
            name: "samples",
            required: false,
            target_type: "sample"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        description: "Broad categorization of the contents of the data file.\n",
        enum: ["Proteome"]
      },
      data_format: {
        description: "Format of the data files.\n",
        enum: ["TXT", "TSV", "CSV", "GCT", "RAW", "MZID.GZ", "MZML.GZ"]
      },
      data_type: {
        description: "Specific content type of the data file.\n",
        type: "string"
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        description:
          "The sequencing strategy used to generate the data file.\n",
        enum: ["TMT10", "iTRAQ4", "Label Free"]
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      original_file_name: {
        description:
          "Original file name in https://cptc-xfer.uis.georgetown.edu/publicData/Phase_II_Data/CPTAC_Breast_Cancer_S039\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      samples: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "data_type",
      "md5sum",
      "file_size",
      "data_format",
      "data_category",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Raw Protein Mass Spectrometry",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  read_group: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "biospecimen",
    description: "Sequencing reads from one lane of an NGS experiment.",
    id: "read_group",
    links: [
      {
        backref: "read_groups",
        label: "derived_from",
        multiplicity: "many_to_one",
        name: "aliquots",
        required: true,
        target_type: "aliquot"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      RIN: {
        term: {
          description:
            "A numerical assessment of the integrity of RNA based on the entire electrophoretic trace of the RNA sample including the presence or absence of degradation products.\n",
          termDef: {
            cde_id: 5278775,
            cde_version: 1.0,
            source: "caDSR",
            term: "Biospecimen RNA Integrity Number Value",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5278775&version=1.0"
          }
        },
        type: "number"
      },
      adapter_name: {
        term: { description: "Name of the sequencing adapter.\n" },
        type: "string"
      },
      adapter_sequence: {
        term: { description: "Base sequence of the sequencing adapter.\n" },
        type: "string"
      },
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      barcoding_applied: {
        description: "True/False: was barcoding applied?",
        type: "boolean"
      },
      base_caller_name: {
        term: { description: "Name of the base caller.\n" },
        type: "string"
      },
      base_caller_version: {
        term: { description: "Version of the base caller.\n" },
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      experiment_name: {
        term: { description: "Submitter-defined name for the experiment.\n" },
        type: "string"
      },
      flow_cell_barcode: {
        term: { description: "Flow Cell Barcode.\n" },
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      includes_spike_ins: {
        term: { description: "Spike-in included?\n" },
        type: "boolean"
      },
      instrument_model: {
        enum: [
          "454 GS FLX Titanium",
          "AB SOLiD 4",
          "AB SOLiD 2",
          "AB SOLiD 3",
          "Complete Genomics",
          "Illumina HiSeq X Ten",
          "Illumina HiSeq X Five",
          "Illumina Genome Analyzer II",
          "Illumina Genome Analyzer IIx",
          "Illumina HiSeq 2000",
          "Illumina HiSeq 2500",
          "Illumina HiSeq 4000",
          "Illumina MiSeq",
          "Illumina NextSeq 500",
          "Illumina NextSeq 550",
          "Illumina NovaSeq 6000",
          "Ion Torrent PGM",
          "Ion Torrent Proton",
          "PacBio RS",
          "Ion S5 XL System, Ion 530 Chip",
          "Other"
        ],
        terms: {
          description:
            "Numeric value that represents the sample dimension that is greater than the shortest dimension and less than the longest dimension, measured in millimeters.\n",
          termDef: {
            cde_id: 5432604,
            cde_version: 1.0,
            source: "caDSR",
            term: "Tissue Sample Intermediate Dimension Millimeter Measurement",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432604&version=1.0"
          }
        }
      },
      is_paired_end: {
        term: { description: "Are the reads paired end?\n" },
        type: "boolean"
      },
      library_name: {
        term: { description: "Name of the library.\n" },
        type: "string"
      },
      library_preparation_kit_catalog_number: {
        term: { description: "Catalog of Library Preparation Kit\n" },
        type: "string"
      },
      library_preparation_kit_name: {
        term: { description: "Name of Library Preparation Kit\n" },
        type: "string"
      },
      library_preparation_kit_vendor: {
        term: { description: "Vendor of Library Preparation Kit\n" },
        type: "string"
      },
      library_preparation_kit_version: {
        term: { description: "Version of Library Preparation Kit\n" },
        type: "string"
      },
      library_selection: {
        enum: [
          "Hybrid_Selection",
          "PCR",
          "Affinity_Enrichment",
          "Poly-T_Enrichment",
          "RNA_Depletion",
          "Other"
        ],
        term: { description: "Library Selection Method\n" }
      },
      library_strand: {
        enum: ["Unstranded", "First_Stranded", "Second_Stranded"],
        term: { description: "Library stranded-ness.\n" }
      },
      library_strategy: {
        enum: [
          "WGS",
          "WXS",
          "RNA-Seq",
          "ChIP-Seq",
          "miRNA-Seq",
          "Bisulfite-Seq",
          "Validation",
          "Amplicon",
          "Other"
        ],
        term: { description: "Library strategy.\n" }
      },
      platform: {
        enum: [
          "Illumina",
          "SOLiD",
          "LS454",
          "Ion Torrent",
          "Complete Genomics",
          "PacBio",
          "Other"
        ],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      read_group_name: { description: "Read Group Name", type: "string" },
      read_length: { type: "integer" },
      sequencing_center: {
        term: {
          description: "Name of the center that provided the sequence files.\n"
        },
        type: "string"
      },
      sequencing_date: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      size_selection_range: {
        term: { description: "Range of size selection.\n" },
        type: "string"
      },
      spike_ins_concentration: {
        term: { description: "Spike in concentration.\n" },
        type: "string"
      },
      spike_ins_fasta: {
        term: {
          description:
            "Name of the FASTA file that contains the spike-in sequences.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: { type: "string" },
      target_capture_kit_catalog_number: {
        term: { description: "Catalog of Target Capture Kit.\n" },
        type: "string"
      },
      target_capture_kit_name: {
        term: { description: "Name of Target Capture Kit.\n" },
        type: "string"
      },
      target_capture_kit_target_region: {
        term: { description: "Target Capture Kit BED file.\n" },
        type: "string"
      },
      target_capture_kit_vendor: {
        term: { description: "Vendor of Target Capture Kit.\n" },
        type: "string"
      },
      target_capture_kit_version: {
        term: { description: "Version of Target Capture Kit.\n" },
        type: "string"
      },
      to_trim_adapter_sequence: {
        term: { description: "Does the user suggest adapter trimming?\n" },
        type: "boolean"
      },
      type: { enum: ["read_group"] },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["type", "submitter_id", "aliquots"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Read Group",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  read_group_qc: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "notation",
    description: "GDC QC run metadata.",
    id: "read_group_qc",
    links: [
      {
        exclusive: true,
        required: true,
        subgroup: [
          {
            backref: "read_group_qcs",
            label: "data_from",
            multiplicity: "one_to_one",
            name: "submitted_aligned_reads_files",
            required: false,
            target_type: "submitted_aligned_reads"
          },
          {
            backref: "read_group_qcs",
            label: "data_from",
            multiplicity: "one_to_many",
            name: "submitted_unaligned_reads_files",
            required: false,
            target_type: "submitted_unaligned_reads"
          }
        ]
      },
      {
        backref: "read_group_qcs",
        label: "generated_from",
        multiplicity: "many_to_one",
        name: "read_groups",
        required: true,
        target_type: "read_group"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      adapter_content: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      basic_statistics: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      encoding: {
        term: {
          description:
            "Version of ASCII encoding of quality values found in the file.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "Encoding",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/1%20Basic%20Statistics.html"
          }
        },
        type: "string"
      },
      fastq_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      kmer_content: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      overrepresented_sequences: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      per_base_n_content: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      per_base_sequence_content: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      per_base_sequence_quality: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      per_sequence_gc_content: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      per_sequence_quality_score: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      per_tile_sequence_quality: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      percent_aligned: {
        description:
          "The percent of reads with at least one reported alignment.",
        maximum: 100,
        minimum: 0,
        type: "integer"
      },
      percent_gc_content: {
        maximum: 100,
        minimum: 0,
        term: {
          description: "The overall %GC of all bases in all sequences.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "%GC",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/1%20Basic%20Statistics.html"
          }
        },
        type: "integer"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      read_groups: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      sequence_duplication_levels: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      sequence_length_distribution: {
        enum: ["FAIL", "PASS", "WARN"],
        term: {
          description:
            "State classification given by FASTQC for the metric. Metric specific details about the states are available on their website.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "QC Metric State",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/"
          }
        }
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitted_unaligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      total_aligned_reads: {
        description:
          "The total number of reads with at least one reported alignment.",
        type: "integer"
      },
      total_sequences: {
        term: {
          description: "A count of the total number of sequences processed.\n",
          termDef: {
            cde_id: null,
            cde_version: null,
            source: "FastQC",
            term: "Total Sequences",
            term_url:
              "http://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/3%20Analysis%20Modules/1%20Basic%20Statistics.html"
          }
        },
        type: "integer"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_type: {
        enum: ["Read Group Quality Control"],
        term: {
          description:
            "Generic name for the workflow used to analyze a data set.\n"
        }
      },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    },
    required: [
      "submitter_id",
      "workflow_link",
      "type",
      "percent_gc_content",
      "encoding",
      "total_sequences",
      "basic_statistics",
      "per_base_sequence_quality",
      "per_tile_sequence_quality",
      "per_sequence_quality_score",
      "per_base_sequence_content",
      "per_sequence_gc_content",
      "per_base_n_content",
      "sequence_length_distribution",
      "sequence_duplication_levels",
      "overrepresented_sequences",
      "adapter_content",
      "kmer_content",
      "read_groups"
    ],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Read Group QC",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  rna_expression_workflow: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "analysis",
    description:
      "Metadata for the RNA expression pipeline used to quantify RNA gene and exon expression from unharmonized or GDC harmonized data.\n",
    id: "rna_expression_workflow",
    links: [
      {
        exclusive: true,
        required: true,
        subgroup: [
          {
            backref: "rna_expression_workflows",
            label: "performed_on",
            multiplicity: "many_to_many",
            name: "aligned_reads_files",
            required: false,
            target_type: "aligned_reads"
          },
          {
            backref: "rna_expression_workflows",
            label: "performed_on",
            multiplicity: "many_to_many",
            name: "submitted_aligned_reads_files",
            required: false,
            target_type: "submitted_aligned_reads"
          },
          {
            backref: "rna_expression_workflows",
            label: "performed_on",
            multiplicity: "many_to_many",
            name: "submitted_unaligned_reads_files",
            required: false,
            target_type: "submitted_unaligned_reads"
          },
          {
            backref: "rna_expression_workflows",
            label: "performed_on",
            multiplicity: "many_to_many",
            name: "mrna_microarrays",
            required: false,
            target_type: "mrna_microarray"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      mrna_microarrays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitted_aligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitted_unaligned_reads_files: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_end_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_link: {
        description: "Link to Github hash for the CWL workflow used.",
        type: "string"
      },
      workflow_start_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      workflow_type: {
        enum: [
          "DEXSeq",
          "HTSeq - FPKM",
          "HTSeq - FPKM-UQ",
          "HTSeq - Counts",
          "Cufflinks",
          "Kallisto",
          "RNASeQC",
          "RSEM",
          "Flux",
          "ASE"
        ],
        term: {
          description:
            "Generic name for the workflow used to analyze a data set.\n"
        }
      },
      workflow_version: {
        description: "Major version for a GDC workflow.",
        type: "string"
      }
    },
    required: ["submitter_id", "type", "workflow_link", "workflow_type"],
    submittable: false,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "RNA Expression Workflow",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  root: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "internal",
    constraints: null,
    id: "root",
    links: [],
    program: "*",
    project: "*",
    properties: {
      id: { enum: ["root"] },
      schema_version: { type: "string" },
      type: { type: "string" }
    },
    required: ["type"],
    root: "*",
    submittable: false,
    systemProperties: ["id"],
    title: "Root",
    type: "object",
    uniqueKeys: [["id"]],
    validators: null
  },
  sample: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "biospecimen",
    description:
      "Any material sample taken from a biological entity for testing, diagnostic, propagation, treatment or research purposes, including a sample obtained from a living organism or taken from the biological object after halting of all its life functions. Biospecimen can contain one or more components including but not limited to cellular molecules, cells, tissues, organs, body fluids, embryos, and body excretory products.\n",
    id: "sample",
    links: [
      {
        backref: "samples",
        label: "derived_from",
        multiplicity: "many_to_one",
        name: "subjects",
        required: true,
        target_type: "subject"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      biospecimen_anatomic_site: {
        enum: [
          "Abdomen",
          "Abdominal Wall",
          "Acetabulum",
          "Adenoid",
          "Adipose",
          "Adrenal",
          "Alveolar Ridge",
          "Amniotic Fluid",
          "Ampulla Of Vater",
          "Anal Sphincter",
          "Ankle",
          "Anorectum",
          "Antecubital Fossa",
          "Antrum",
          "Anus",
          "Aorta",
          "Aortic Body",
          "Appendix",
          "Aqueous Fluid",
          "Arm",
          "Artery",
          "Ascending Colon",
          "Ascending Colon Hepatic Flexure",
          "Auditory Canal",
          "Autonomic Nervous System",
          "Axilla",
          "Back",
          "Bile Duct",
          "Bladder",
          "Blood",
          "Blood Vessel",
          "Bone",
          "Bone Marrow",
          "Bowel",
          "Brain",
          "Brain Stem",
          "Breast",
          "Broad Ligament",
          "Bronchiole",
          "Bronchus",
          "Brow",
          "Buccal Cavity",
          "Buccal Mucosa",
          "Buttock",
          "Calf",
          "Capillary",
          "Cardia",
          "Carina",
          "Carotid Artery",
          "Carotid Body",
          "Cartilage",
          "Cecum",
          "Cell-Line",
          "Central Nervous System",
          "Cerebellum",
          "Cerebral Cortex",
          "Cerebrospinal Fluid",
          "Cerebrum",
          "Cervical Spine",
          "Cervix",
          "Chest",
          "Chest Wall",
          "Chin",
          "Clavicle",
          "Clitoris",
          "Colon",
          "Colon - Mucosa Only",
          "Common Duct",
          "Conjunctiva",
          "Connective Tissue",
          "Dermal",
          "Descending Colon",
          "Diaphragm",
          "Duodenum",
          "Ear",
          "Ear Canal",
          "Ear, Pinna (External)",
          "Effusion",
          "Elbow",
          "Endocrine Gland",
          "Epididymis",
          "Epidural Space",
          "Esophagogastric Junction",
          "Esophagus",
          "Esophagus - Mucosa Only",
          "Eye",
          "Fallopian Tube",
          "Femoral Artery",
          "Femoral Vein",
          "Femur",
          "Fibroblasts",
          "Fibula",
          "Finger",
          "Floor Of Mouth",
          "Fluid",
          "Foot",
          "Forearm",
          "Forehead",
          "Foreskin",
          "Frontal Cortex",
          "Frontal Lobe",
          "Fundus Of Stomach",
          "Gallbladder",
          "Ganglia",
          "Gastroesophageal Junction",
          "Gastrointestinal Tract",
          "Groin",
          "Gum",
          "Hand",
          "Hard Palate",
          "Head & Neck",
          "Head - Face Or Neck, Nos",
          "Heart",
          "Hepatic",
          "Hepatic Duct",
          "Hepatic Vein",
          "Hip",
          "Hippocampus",
          "Humerus",
          "Hypopharynx",
          "Ileum",
          "Ilium",
          "Index Finger",
          "Ischium",
          "Islet Cells",
          "Jaw",
          "Jejunum",
          "Joint",
          "Kidney",
          "Knee",
          "Lacrimal Gland",
          "Large Bowel",
          "Laryngopharynx",
          "Larynx",
          "Leg",
          "Leptomeninges",
          "Ligament",
          "Lip",
          "Liver",
          "Lumbar Spine",
          "Lung",
          "Lymph Node",
          "Lymph Node(s) Axilla",
          "Lymph Node(s) Cervical",
          "Lymph Node(s) Distant",
          "Lymph Node(s) Epitrochlear",
          "Lymph Node(s) Femoral",
          "Lymph Node(s) Hilar",
          "Lymph Node(s) Iliac-Common",
          "Lymph Node(s) Iliac-External",
          "Lymph Node(s) Inguinal",
          "Lymph Node(s) Internal Mammary",
          "Lymph Node(s) Mammary",
          "Lymph Node(s) Mesenteric",
          "Lymph Node(s) Occipital",
          "Lymph Node(s) Paraaortic",
          "Lymph Node(s) Parotid",
          "Lymph Node(s) Pelvic",
          "Lymph Node(s) Popliteal",
          "Lymph Node(s) Regional",
          "Lymph Node(s) Retroperitoneal",
          "Lymph Node(s) Scalene",
          "Lymph Node(s) Splenic",
          "Lymph Node(s) Subclavicular",
          "Lymph Node(s) Submandibular",
          "Lymph Node(s) Supraclavicular",
          "Lymph Nodes(s) Mediastinal",
          "Mandible",
          "Maxilla",
          "Mediastinal Soft Tissue",
          "Mediastinum",
          "Mesentery",
          "Mesothelium",
          "Middle Finger",
          "Mitochondria",
          "Muscle",
          "Nails",
          "Nasal Cavity",
          "Nasal Soft Tissue",
          "Nasopharynx",
          "Neck",
          "Nerve",
          "Nerve(s) Cranial",
          "Occipital Cortex",
          "Ocular Orbits",
          "Omentum",
          "Oral Cavity",
          "Oral Cavity - Mucosa Only",
          "Oropharynx",
          "Other",
          "Ovary",
          "Palate",
          "Pancreas",
          "Paraspinal Ganglion",
          "Parathyroid",
          "Parotid Gland",
          "Patella",
          "Pelvis",
          "Penis",
          "Pericardium",
          "Periorbital Soft Tissue",
          "Peritoneal Cavity",
          "Peritoneum",
          "Pharynx",
          "Pineal",
          "Pineal Gland",
          "Pituitary Gland",
          "Placenta",
          "Pleura",
          "Popliteal Fossa",
          "Prostate",
          "Pylorus",
          "Rectosigmoid Junction",
          "Rectum",
          "Retina",
          "Retro-Orbital Region",
          "Retroperitoneum",
          "Rib",
          "Ring Finger",
          "Round Ligament",
          "Sacrum",
          "Salivary Gland",
          "Scalp",
          "Scapula",
          "Sciatic Nerve",
          "Scrotum",
          "Seminal Vesicle",
          "Shoulder",
          "Sigmoid Colon",
          "Sinus",
          "Sinus(es), Maxillary",
          "Skeletal Muscle",
          "Skin",
          "Skull",
          "Small Bowel",
          "Small Bowel - Mucosa Only",
          "Small Finger",
          "Soft Tissue",
          "Spinal Column",
          "Spinal Cord",
          "Spleen",
          "Splenic Flexure",
          "Sternum",
          "Stomach",
          "Stomach - Mucosa Only",
          "Subcutaneous Tissue",
          "Synovium",
          "Temporal Cortex",
          "Tendon",
          "Testis",
          "Thigh",
          "Thoracic Spine",
          "Thorax",
          "Throat",
          "Thumb",
          "Thymus",
          "Thyroid",
          "Tibia",
          "Tongue",
          "Tonsil",
          "Tonsil (Pharyngeal)",
          "Trachea / Major Bronchi",
          "Transverse Colon",
          "Trunk",
          "Umbilical Cord",
          "Ureter",
          "Urethra",
          "Urinary Tract",
          "Uterus",
          "Uvula",
          "Vagina",
          "Vas Deferens",
          "Vein",
          "Venous",
          "Vertebra",
          "Vulva",
          "White Blood Cells",
          "Wrist",
          "Unknown",
          "Not Reported",
          "Not Allowed To Collect"
        ],
        term: {
          description:
            "Text term that represents the name of the primary disease site of the submitted tumor sample.\n",
          termDef: {
            cde_id: 4742851,
            cde_version: 1.0,
            source: "caDSR",
            term: "Submitted Tumor Sample Primary Anatomic Site",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=4742851&version=1.0"
          }
        }
      },
      cell_line_aliases: {
        description: "Cell line alias name commonly used.\n",
        type: "string"
      },
      cell_primary_name: {
        description: "Cell line primary name kept in repository resource.\n",
        type: "string"
      },
      composition: {
        enum: [
          "Buccal Cells",
          "Buffy Coat",
          "Bone Marrow Components",
          "Bone Marrow Components NOS",
          "Control Analyte",
          "Cell",
          "Circulating Tumor Cell (CTC)",
          "Derived Cell Line",
          "EBV Immortalized",
          "Fibroblasts from Bone Marrow Normal",
          "Granulocytes",
          "Canine Original Cells",
          "Lymphocytes",
          "Mononuclear Cells from Bone Marrow Normal",
          "Peripheral Blood Components NOS",
          "Peripheral Blood Nucleated Cells",
          "Pleural Effusion",
          "Plasma",
          "Peripheral Whole Blood",
          "Serum",
          "Saliva",
          "Sputum",
          "Solid Tissue",
          "Whole Bone Marrow",
          "Unknown",
          "Not Reported",
          "Not Allowed To Collect"
        ],
        term: {
          description:
            "Text term that represents the cellular composition of the sample.\n",
          termDef: {
            cde_id: 5432591,
            cde_version: 1.0,
            source: "caDSR",
            term: "Biospecimen Cellular Composition Type",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5432591&version=1.0"
          }
        }
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      current_weight: {
        description:
          "Numeric value that represents the current weight of the sample, measured in milligrams.\n",
        type: "number"
      },
      days_to_collection: {
        description:
          "Time interval from the date of biospecimen collection to the date of initial pathologic diagnosis, represented as a calculated number of days.\n",
        type: "integer"
      },
      days_to_sample_procurement: {
        description:
          "The number of days from the date the patient was diagnosed to the date of the procedure that produced the sample.\n",
        type: "integer"
      },
      diagnosis_pathologically_confirmed: {
        description:
          "The histologic description of tissue or cells confirmed by a pathology review of frozen or formalin fixed slide(s) completed after the diagnostic pathology review of the tumor sample used to extract analyte(s).\n",
        type: "string"
      },
      freezing_method: {
        description:
          "Text term that represents the method used for freezing the sample.\n",
        type: "string"
      },
      gdc_project_id: {
        description:
          "Project identifier associated with the sample at the genomic data commons.\n",
        type: "string"
      },
      gdc_sample_id: {
        description:
          "Sample identifier associated with the sample at the genomic data commons.\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      initial_weight: {
        description:
          "Numeric value that represents the initial weight of the sample, measured in milligrams.\n",
        type: "number"
      },
      intermediate_dimension: {
        description: "Intermediate dimension of the sample, in millimeters.\n",
        type: "string"
      },
      is_ffpe: {
        description:
          "Indicator to signify whether or not the tissue sample was fixed in formalin and embedded in paraffin (FFPE).\n",
        type: "integer"
      },
      longest_dimension: {
        description:
          "Numeric value that represents the longest dimension of the sample, measured in millimeters.\n",
        type: "string"
      },
      method_of_sample_procurement: {
        description:
          "The method used to procure the sample used to extract analyte(s).\n",
        type: "string"
      },
      notes: {
        description: "Records of relationship to other cell line.\n",
        type: "string"
      },
      oct_embedded: {
        description:
          "Indicator of whether or not the sample was embedded in Optimal Cutting Temperature (OCT) compound.\n",
        type: "string"
      },
      pathology_report_uuid: {
        description: "UUID of the related pathology report.\n",
        type: "string"
      },
      preservation_method: {
        description:
          "Text term that represents the method used to preserve the sample.\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      sample_type: {
        description:
          "Characterization of the sample as either clinical or contrived.",
        enum: [
          "Additional Metastatic",
          "Additional - New Primary",
          "Blood Derived Cancer - Bone Marrow, Post-treatment",
          "Blood Derived Cancer - Peripheral Blood, Post-treatment",
          "Blood Derived Normal",
          "Bone Marrow Normal",
          "Buccal Cell Normal",
          "Cell Line Derived Xenograft Tissue",
          "Cell Lines",
          "cfDNA",
          "Circulating Tumor Cell (CTC)",
          "Control Analyte",
          "Clinical",
          "Contrived",
          "ctDNA",
          "DNA",
          "EBV Immortalized Normal",
          "FFPE Recurrent",
          "FFPE Scrolls",
          "Fibroblasts from Bone Marrow Normal",
          "GenomePlex (Rubicon) Amplified DNA",
          "Granulocytes",
          "Canine Tumor Original Cells",
          "Metastatic",
          "Mononuclear Cells from Bone Marrow Normal",
          "Primary Blood Derived Cancer - Peripheral Blood",
          "Recurrent Blood Derived Cancer - Peripheral Blood",
          "Pleural Effusion",
          "Primary Blood Derived Cancer - Bone Marrow",
          "Primary Tumor",
          "Primary Xenograft Tissue",
          "Post neo-adjuvant therapy",
          "Recurrent Blood Derived Cancer - Bone Marrow",
          "Recurrent Tumor",
          "Repli-G (Qiagen) DNA",
          "Repli-G X (Qiagen) DNA",
          "RNA",
          "Slides",
          "Solid Tissue Normal",
          "Total RNA",
          "Xenograft Tissue",
          "Unknown",
          "Not Reported",
          "Not Allowed To Collect"
        ]
      },
      sample_type_id: {
        description: "Code associated with the sample type.\n",
        type: "string"
      },
      shortest_dimension: {
        description:
          "Numeric value that represents the shortest dimension of the sample, measured in millimeters.\n",
        type: "string"
      },
      source: {
        description:
          "The name of primary source that the cell line is taken from.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      subjects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      time_between_clamping_and_freezing: {
        description:
          "Numeric representation of the elapsed time between the surgical clamping of blood supply and freezing of the sample, measured in minutes.\n",
        type: "string"
      },
      time_between_excision_and_freezing: {
        description:
          "Numeric representation of the elapsed time between the excision and freezing of the sample, measured in minutes.\n",
        type: "string"
      },
      tissue_type: {
        description:
          "Text term that represents a description of the kind of tissue collected with respect to disease status or proximity to tumor tissue.\n",
        type: "string"
      },
      tumor_code: {
        description: "Diagnostic tumor code of the tissue sample source.\n",
        type: "string"
      },
      tumor_code_id: {
        description: "BCR-defined id code for the tumor sample.\n",
        type: "string"
      },
      tumor_descriptor: {
        description:
          "Text that describes the kind of disease present in the tumor specimen as related to a specific timepoint.\n",
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "subjects", "sample_type"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Sample",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  study: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description:
      "A coordinated set of actions and observations designed to generate data, with the ultimate goal of discovery or hypothesis testing.\n",
    id: "study",
    links: [
      {
        backref: "studies",
        label: "performed_for",
        multiplicity: "many_to_one",
        name: "projects",
        required: true,
        target_type: "project"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      analytical_fraction: {
        description: "Type of peptide or protein enrichment\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_description: {
        description:
          "Brief description of the data being provided for this study. Free text",
        type: "string"
      },
      experiment_type: {
        description: "General strategy used for differential analysis\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      is_clinical_trial: {
        description:
          "Flag that indicates whether this is a clinical trial study\n",
        type: "boolean"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      projects: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                code: { type: "string" },
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              code: { type: "string" },
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      study_completeness: {
        description:
          "Description of data status. 0=Descriptive data and results as originally received from the data provider. 1=Includes updates to the original data submission short of completeness. 2=Complete set of descriptive data and results, as ascertained by curator.\n",
        enum: ["0", "1", "2"]
      },
      study_description: {
        description:
          "A brief description of the study being performed. Free text",
        type: "string"
      },
      study_design: {
        description:
          "Summary of the goals the study is designed to discover. General description of the study's place in relation to a clinical application.\n",
        type: "string"
      },
      study_doi: {
        description:
          "Digital object identifier (DOI) is a type of persistent identifier used to uniquely identify objects\n",
        type: "string"
      },
      study_objective: {
        description:
          "The general objective of the study. What the study hopes to discover or determine through testing.\n",
        type: "string"
      },
      study_organization: {
        description:
          "Name of the primary organization that oversees implementation of the study\n",
        type: "string"
      },
      study_release_date: {
        description: "Latest date when the study was shared\n",
        type: "string"
      },
      study_release_version: {
        description: "Latest version of study shared\n",
        type: "string"
      },
      study_setup: { description: "Category\n", type: "string" },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "study_description", "projects"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Study",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  study_run_metadata: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "notation",
    description: "General experimental metadata describing study design.\n",
    id: "study_run_metadata",
    links: [
      {
        backref: "study_run_metadata_records",
        label: "data_from",
        multiplicity: "many_to_one",
        name: "protocols",
        required: true,
        target_type: "protocol"
      },
      {
        backref: "study_run_metadata_records",
        label: "data_from",
        multiplicity: "many_to_one",
        name: "studies",
        required: true,
        target_type: "study"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      analyte: {
        description: "Type of peptide or protein enrichment.\n",
        type: "string"
      },
      condition: {
        description:
          "Biological condition (ex: disease state) of the cases (patients) from which the aliquots derived.\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      date: {
        description: "Date of the data acquired from the mass spectrometry.\n",
        type: "string"
      },
      experiment_number: {
        description:
          "Number associated with a specific run of the experiment.\n",
        type: "integer"
      },
      experiment_type: {
        description: "General strategy use for differential analysis.\n",
        type: "string"
      },
      fraction: {
        description: "Number of fractions in the experimental run.\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      instrument: {
        description: "Make and model of the mass spectrometry instrument.\n",
        type: "string"
      },
      operator: {
        description: "Mass spectrometry instrument operator.\n",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      protocols: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      replicate_number: {
        description: "Replicate number, if applicable.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      studies: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "studies", "protocols"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Study Run Metadata",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  subject: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "administrative",
    description:
      "The collection of all data related to a specific subject in the context of a specific study.\n",
    id: "subject",
    links: [
      {
        backref: "subjects",
        label: "member_of",
        multiplicity: "many_to_one",
        name: "studies",
        required: true,
        target_type: "study"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      breed: {
        description: "American Kennel Club dog breeds information\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      days_to_lost_to_followup: {
        description:
          "The number of days between the date used for index and to the data the patient was lost to follow-up.\n",
        type: "integer"
      },
      disease_type: {
        description: "Name of the disease for the subject.",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      index_date: {
        description:
          "The reference or anchor date used during date obfuscation, where a single date is obscurred by creating one or more date ranges in relation to this date.\n",
        enum: [
          "Diagnosis",
          "First Patient Visit",
          "Study Enrollment",
          "Infection"
        ]
      },
      lost_to_followup: {
        description:
          "A yes/no indicator related to whether a patient was unable to be contacted for follow-up.\n",
        type: "string"
      },
      primary_site: {
        description: "Primary site for the subject.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      species: {
        description: "Taxonomic species of the subject.",
        enum: [
          "Drosophila melanogaster",
          "Homo sapiens",
          "Mus musculus",
          "Mustela putorius furo",
          "Rattus rattus",
          "Sus scrofa",
          "Canis lupus familiaris"
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      studies: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      submitter_id: { type: ["string", "null"] },
      tissue_source_site_code: {
        description:
          "A clinical site that collects and provides patient samples and clinical metadata for research use.\n",
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "studies", "type"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state"
    ],
    title: "Subject",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  submitted_aligned_reads: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "Data file containing aligned reads that are used as input to GDC workflows.\n",
    id: "submitted_aligned_reads",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "submitted_aligned_reads_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "submitted_aligned_reads_files",
            label: "data_from",
            multiplicity: "one_to_many",
            name: "read_groups",
            required: false,
            target_type: "read_group"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Sequencing Data", "Sequencing Reads", "Raw Sequencing Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["BAM", "BED"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Aligned Reads", "Alignment Coordinates"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: [
          "WGS",
          "WXS",
          "Low Pass WGS",
          "Validation",
          "RNA-Seq",
          "miRNA-Seq",
          "Total RNA-Seq",
          "DNA Panel"
        ],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      read_groups: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_format",
      "md5sum",
      "data_category",
      "data_type",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Submitted Aligned Reads",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  submitted_genomic_profile: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description: "Data file containing genomic profile information.\n",
    downloadable: false,
    id: "submitted_genomic_profile",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "submitted_genomic_profiles",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "submitted_genomic_profiles",
            label: "data_from",
            multiplicity: "many_to_many",
            name: "read_groups",
            required: false,
            target_type: "read_group"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Combined Nucleotide Variation", "Genomic Profiling"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["MAF", "TSV", "VCF", "XML", "TXT", "PLINK"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: [
          "FoundationOne Report",
          "GENIE Report",
          "Raw CGI Variant",
          "Aggregated mutation information",
          "GWAS dosage SNP data"
        ],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: [
          "Targeted Sequencing",
          "WGS",
          "WXS",
          "Low Pass WGS",
          "Validation",
          "RNA-Seq",
          "miRNA-Seq",
          "Total RNA-Seq",
          "DNA Panel"
        ],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      read_groups: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_format",
      "md5sum",
      "data_category",
      "data_type",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Submitted Genomic Profile",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  submitted_methylation: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "DNA methylation data files contain information on raw and normalized signal intensities, detection confidence and calculated beta values for methylated and unmethylated probes. DNA methylation is an epigenetic mark which can be associated with transcriptional inactivity when located in promoter regions.",
    id: "submitted_methylation",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "submitted_methylation_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "submitted_methylation_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "aliquots",
            required: false,
            target_type: "aliquot"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      assay_instrument: {
        description:
          "The specific instrument type used to perform the assay.\n",
        enum: ["Illumina"]
      },
      assay_instrument_model: {
        description:
          "The specific model of instrument used to perform the assay.\n",
        enum: [
          "Illumina Infinium Methylation 450",
          "Illumina Infinium Methylation 450K",
          "Illumina Infinium Methylation 850K"
        ]
      },
      assay_method: {
        description: "General methodology used to perform the assay.\n",
        enum: ["Methylation Array"]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Methylation Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["IDAT"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Methylation Intensity Values"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "md5sum",
      "data_category",
      "data_type",
      "data_format"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Submitted Methylation",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  submitted_unaligned_reads: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "Data file containing unaligned reads that have not been GDC Harmonized.",
    id: "submitted_unaligned_reads",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "submitted_unaligned_reads_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "submitted_unaligned_reads_files",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "read_groups",
            required: false,
            target_type: "read_group"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Sequencing Data", "Sequencing Reads", "Raw Sequencing Data"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["BAM", "FASTQ"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Unaligned Reads"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: [
          "WGS",
          "WXS",
          "Low Pass WGS",
          "Validation",
          "RNA-Seq",
          "miRNA-Seq",
          "Total RNA-Seq",
          "DNA Panel"
        ],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      read_groups: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "md5sum",
      "data_category",
      "data_type",
      "data_format",
      "experimental_strategy"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Submitted Unaligned Reads",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  summary_drug_response: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "clinical",
    description: "Summary of drug response for each sample\n",
    id: "summary_drug_response",
    links: [
      {
        backref: "summary_drug_responses",
        label: "describes",
        multiplicity: "many_to_one",
        name: "samples",
        required: true,
        target_type: "sample"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      EC50: {
        description:
          "Half maximal effective concentration (EC50) refers to the concentration of a drug, antibody or toxicant which induces a response halfway between the baseline and maximum after a specifiedd exposure time meausred in uM.\n",
        type: "number"
      },
      IC50: {
        description:
          "The half maximal inhibitory concentration (IC50) is a measure of the potency of a substance in inhibiting a specific biological or biochemical function in uM.\n",
        type: "number"
      },
      actarea: {
        description:
          "the area between the drug-response curve and a fixed reference\n",
        type: "number"
      },
      compound: {
        description: "The composition of the drug\n",
        type: "string"
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      fit_type: {
        description: "Type of fitting dose response curves\n",
        type: "string"
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      maximum_activity: {
        description:
          "the maximal activity value as a drug response measurement\n",
        type: "number"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      samples: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: ["submitter_id", "type", "samples"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Drug Response Summary",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  tangent_copy_number: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "data_file",
    description:
      "Data file containing tangent normalized copy number information from an aliquot.",
    id: "tangent_copy_number",
    links: [
      {
        exclusive: false,
        required: true,
        subgroup: [
          {
            backref: "tangent_copy_numbers",
            label: "data_from",
            multiplicity: "many_to_one",
            name: "core_metadata_collections",
            required: false,
            target_type: "core_metadata_collection"
          },
          {
            backref: "tangent_copy_numbers",
            label: "data_from",
            multiplicity: "one_to_one",
            name: "genotyping_arrays",
            required: false,
            target_type: "genotyping_array"
          },
          {
            backref: "tangent_copy_numbers",
            label: "data_from",
            multiplicity: "one_to_one",
            name: "genotyping_array_workflows",
            required: false,
            target_type: "genotyping_array_workflow"
          },
          {
            backref: "tangent_copy_numbers",
            label: "data_for",
            multiplicity: "one_to_one",
            name: "aliquots",
            required: false,
            target_type: "aliquot"
          }
        ]
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      aliquots: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      core_metadata_collections: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      data_category: {
        enum: ["Copy Number Variation"],
        term: {
          description:
            "Broad categorization of the contents of the data file.\n"
        }
      },
      data_format: {
        enum: ["TXT"],
        term: { description: "Format of the data files.\n" }
      },
      data_type: {
        enum: ["Copy Number Estimate"],
        term: { description: "Specific content type of the data file.\n" }
      },
      error_type: {
        enum: ["file_size", "file_format", "md5sum"],
        term: { description: "Type of error for the data file object.\n" }
      },
      experimental_strategy: {
        enum: ["Genotyping Array"],
        term: {
          description:
            "The sequencing strategy used to generate the data file.\n"
        }
      },
      file_name: {
        term: {
          description: "The name (or part of a name) of a file (of any type).\n"
        },
        type: "string"
      },
      file_size: {
        term: { description: "The size of the data file (object) in bytes.\n" },
        type: "integer"
      },
      file_state: {
        default: "registered",
        enum: [
          "registered",
          "uploading",
          "uploaded",
          "validating",
          "validated",
          "submitted",
          "processing",
          "processed",
          "released",
          "error"
        ],
        term: { description: "The current state of the data file object.\n" }
      },
      genotyping_array_workflows: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      genotyping_arrays: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      md5sum: {
        pattern: "^[a-f0-9]{32}$",
        term: {
          description:
            "The 128-bit hash value expressed as a 32 digit hexadecimal number used as a file's digital fingerprint.\n"
        },
        type: "string"
      },
      object_id: {
        description: "The GUID of the object in the index service.",
        type: "string"
      },
      platform: {
        enum: [
          "Illumina OMNI 5M SNP Array",
          "Illumina OMNI 2.5M SNP Array",
          "Illumina Infinium 20K Canine SNP Beadchip",
          "Illumina CanineHD BeadChip",
          "Affymetrix GeneChip Canine Genome Array",
          "Axiom Canine Genotyping Array",
          "Illumina CanineSNP20 BeadChip"
        ],
        term: { description: "Name of the platform used to obtain data.\n" }
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      }
    },
    required: [
      "submitter_id",
      "type",
      "file_name",
      "file_size",
      "data_category",
      "data_type",
      "data_format",
      "experimental_strategy",
      "md5sum",
      "platform"
    ],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "created_datetime",
      "updated_datetime",
      "state",
      "file_state",
      "error_type"
    ],
    title: "Tangent Copy Number",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  },
  treatment: {
    $schema: "http://json-schema.org/draft-04/schema#",
    additionalProperties: false,
    category: "clinical",
    description:
      "Record of the administration and intention of therapeutic agents provided to a patient to alter the course of a pathologic process.\n",
    id: "treatment",
    links: [
      {
        backref: "treatments",
        label: "relates_to",
        multiplicity: "many_to_one",
        name: "diagnoses",
        required: true,
        target_type: "diagnosis"
      },
      {
        backref: "treatments",
        label: "performs_on",
        multiplicity: "one_to_one",
        name: "follow_ups",
        required: false,
        target_type: "follow_up"
      }
    ],
    namespace: "https://nci-crdc-demo.datacommons.io/",
    program: "*",
    project: "*",
    properties: {
      created_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      diagnoses: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      first_macs_visit_haart: {
        description: "First visit reported HAART\n",
        type: "number"
      },
      follow_ups: {
        anyOf: [
          {
            items: {
              additionalProperties: true,
              maxItems: 1,
              minItems: 1,
              properties: {
                id: {
                  pattern:
                    "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                  term: {
                    description:
                      "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                    termDef: {
                      cde_id: "C54100",
                      cde_version: null,
                      source: "NCIt",
                      term: "Universally Unique Identifier",
                      term_url:
                        "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                    }
                  },
                  type: "string"
                },
                submitter_id: { type: "string" }
              },
              type: "object"
            },
            type: "array"
          },
          {
            additionalProperties: true,
            properties: {
              id: {
                pattern:
                  "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
                term: {
                  description:
                    "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
                  termDef: {
                    cde_id: "C54100",
                    cde_version: null,
                    source: "NCIt",
                    term: "Universally Unique Identifier",
                    term_url:
                      "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
                  }
                },
                type: "string"
              },
              submitter_id: { type: "string" }
            },
            type: "object"
          }
        ]
      },
      id: {
        pattern:
          "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
        systemAlias: "node_id",
        term: {
          description:
            "A 128-bit identifier. Depending on the mechanism used to generate it, it is either guaranteed to be different from all other UUIDs/GUIDs generated until 3400 AD or extremely likely to be different. Its relatively small size lends itself well to sorting, ordering, and hashing of all sorts, storing in databases, simple allocation, and ease of programming in general.\n",
          termDef: {
            cde_id: "C54100",
            cde_version: null,
            source: "NCIt",
            term: "Universally Unique Identifier",
            term_url:
              "https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&version=16.02d&ns=NCI_Thesaurus&code=C54100"
          }
        },
        type: "string"
      },
      last_macs_visit_haart_free: {
        description: "Last visit reported HAART-free\n",
        type: "integer"
      },
      project_id: {
        term: {
          description:
            "Unique ID for any specific defined piece of work that is undertaken or attempted to meet a single requirement.\n"
        },
        type: "string"
      },
      regimen_count: { description: "Count of regimens\n", type: "integer" },
      regimen_or_line_of_therapy: {
        description:
          "General name for a the group of treatments of which this treatment was a part. This reference name can be used to identify treatments involved in a certain outcome later one.\n",
        type: "string"
      },
      state: {
        default: "validated",
        downloadable: [
          "uploaded",
          "md5summed",
          "validating",
          "validated",
          "error",
          "invalid",
          "released"
        ],
        oneOf: [
          {
            enum: [
              "uploading",
              "uploaded",
              "md5summing",
              "md5summed",
              "validating",
              "error",
              "invalid",
              "suppressed",
              "redacted",
              "live"
            ]
          },
          { enum: ["validated", "submitted", "released"] }
        ],
        public: ["live"],
        term: { description: "The current state of the object.\n" }
      },
      submitter_id: {
        description:
          "A project-specific identifier for a node. This property is the calling card/nickname/alias for a unit of submission. It can be used in place of the UUID for identifying or recalling a node.\n",
        type: ["string"]
      },
      therapeutic_agents: {
        term: {
          description:
            "Text identification of the individual agent(s) used as part of a prior treatment regimen.\n",
          termDef: {
            cde_id: 2975232,
            cde_version: 1.0,
            source: "caDSR",
            term: "Prior Therapy Regimen Text",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2975232&version=1.0"
          }
        },
        type: "string"
      },
      treatment_intent_type: {
        term: {
          description:
            "Text term to identify the reason for the administration of a treatment regimen. [Manually-curated]\n",
          termDef: {
            cde_id: 2793511,
            cde_version: 1.0,
            source: "caDSR",
            term: "Treatment Regimen Intent Type",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=2793511&version=1.0"
          }
        },
        type: "string"
      },
      treatment_outcome: {
        enum: [
          "Complete Response",
          "Partial Response",
          "Treatment Ongoing",
          "Treatment Stopped Due to Toxicity",
          "Completed",
          "Cured",
          "Default",
          "Failed",
          "Died",
          "Unknown"
        ],
        term: {
          description:
            "Text term that describes the patient\u00bfs final outcome after the treatment was administered.\n",
          termDef: {
            cde_id: 5102383,
            cde_version: 1.0,
            source: "caDSR",
            term: "Treatment Outcome Type",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5102383&version=1.0"
          }
        }
      },
      treatment_span: { description: "Span of treatment\n", type: "integer" },
      treatment_status: {
        description: "Status of treatment.\n",
        type: "string"
      },
      treatment_type: {
        term: {
          description:
            "Text term that describes the kind of treatment administered.\n",
          termDef: {
            cde_id: 5102381,
            cde_version: 1.0,
            source: "caDSR",
            term: "Treatment Method Type",
            term_url:
              "https://cdebrowser.nci.nih.gov/CDEBrowser/search?elementDetails=9&FirstTimer=0&PageId=ElementDetailsGroup&publicId=5102381&version=1.0"
          }
        },
        type: "string"
      },
      type: { type: "string" },
      updated_datetime: {
        oneOf: [{ format: "date-time", type: "string" }, { type: "null" }],
        term: {
          description:
            "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm]\n"
        }
      },
      year_of_last_haart_free: {
        description: "Last reported HAART-free year\n",
        type: "number"
      },
      year_of_treatment: {
        description: "First reported treatment year\n",
        type: "number"
      }
    },
    required: ["submitter_id", "type", "diagnoses"],
    submittable: true,
    systemProperties: [
      "id",
      "project_id",
      "state",
      "created_datetime",
      "updated_datetime"
    ],
    title: "Treatment",
    type: "object",
    uniqueKeys: [["id"], ["project_id", "submitter_id"]],
    validators: null
  }
};

export default dict;
