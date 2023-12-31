// src/templates/search.tsx

import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless
} from "@yext/search-headless-react";

import SearchExperience from "../components/SearchExperience";

import {apiKey, experienceKey, locale, experienceVersion} from "../common/consts";

export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    //Update title to match Search starter
    title: `Financial Advisors Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const SEARCHER = provideHeadless({
  apiKey: apiKey,
  verticalKey: "financial_professionals",
  experienceKey: experienceKey,
  locale: locale,
  experienceVersion: experienceVersion,
});

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={SEARCHER}>
     <SearchExperience />
    </SearchHeadlessProvider>
  );
};

export default Search;