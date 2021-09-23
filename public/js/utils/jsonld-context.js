const JSONLD_CONTEXT =  {
  "dataid": "http://dataid.dbpedia.org/ns/core#",
  "databus": "https://databus.dbpedia.org/system/ontology#",
  "dataid-cv": "http://dataid.dbpedia.org/ns/cv#",
  "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "dct": "http://purl.org/dc/terms/",
  "dcat": "http://www.w3.org/ns/dcat#",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "cert": "http://www.w3.org/ns/auth/cert#",
  "dbo": "http://dbpedia.org/ontology/",
  "foaf": "http://xmlns.com/foaf/0.1/",
  "sec": "https://w3id.org/security#",
  "maker": {
    "@id": "foaf:maker",
    "@type": "@id"
  },
  "primaryTopic": {
    "@id": "foaf:primaryTopic",
    "@type": "@id"
  },
  "name": {
    "@id": "foaf:name",
    "@type": "xsd:string"
  },
  "account": {
    "@id": "foaf:account",
    "@type": "@id"
  },
  "img": {
    "@id": "foaf:img",
    "@type": "@id"
  },
  "key": {
    "@id": "cert:key"
  },
  "modulus": {
    "@id": "cert:modulus"
  },
  "exponent": {
    "@id": "cert:exponent"
  },
  "title": {
    "@id": "dct:title",
    "@type": "xsd:string"
  },
  "label": {
    "@id": "rdfs:label",
    "@type": "xsd:string"
  },
  "comment": {
    "@id": "rdfs:comment",
    "@type": "xsd:string"
  },
  "abstract": {
    "@id": "dct:abstract",
    "@type": "xsd:string"
  },
  "description": {
    "@id": "dct:description",
    "@type": "xsd:string"
  },
  "issued": {
    "@id": "dct:issued",
    "@type": "xsd:dateTime"
  },
  "modified": {
    "@id": "dct:modified",
    "@type": "xsd:dateTime"
  },
  "license": {
    "@id": "dct:license",
    "@type": "@id"
  },
  "publisher": {
    "@id": "dct:publisher",
    "@type": "@id"
  },
  "distribution": {
    "@id": "dcat:distribution",
    "@type": "@id"
  },
  "downloadURL": {
    "@id": "dcat:downloadURL",
    "@type": "@id"
  },
  "file": {
    "@id": "dataid:file",
    "@type": "@id"
  },
  "byteSize": {
    "@id": "dcat:byteSize",
    "@type": "xsd:decimal"
  },
  "group": {
    "@id": "dataid:group",
    "@type": "@id"
  },
  "Group": "dataid:Group",
  "Dataset": "dataid:Dataset",
  "Artifact": "dataid:Artifact",
  "artifact": {
    "@id": "dataid:artifact",
    "@type": "@id"
  },
  "version": {
    "@id": "dataid:version",
    "@type": "@id"
  },
  "hasVersion": {
    "@id": "dct:hasVersion",
    "@type": "xsd:string"
  },
  "formatExtension": {
    "@id": "dataid:formatExtension",
    "@type": "xsd:string"
  },
  "format": {
    "@id": "dataid:formatExtension",
    "@type": "xsd:string"
  },
  "compression": {
    "@id": "dataid:compression",
    "@type": "xsd:string"
  },
  "sha256sum": {
    "@id": "dataid:sha256sum",
    "@type": "xsd:string"
  },
  "signature": {
    "@id": "dataid:signature",
    "@type": "xsd:string"
  },
  "tractate": {
    "@id": "databus:tractate",
    "@type": "xsd:string"
  }
}