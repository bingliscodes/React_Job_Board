import {
  For,
  Portal,
  Select,
  Stack,
  createListCollection,
} from "@chakra-ui/react";
import { useContext } from "react";

import classes from "./JobFilter.module.css";

import { JobsContext } from "../store/JobsContext";

const JobFilter = () => {
  const { jobs } = useContext(JobsContext);

  const uniqueValues = {
    titles: new Set(),
    companies: new Set(),
    locations: new Set(),
  };
  jobs.forEach((job) => {
    uniqueValues.titles.add(job.title);
    uniqueValues.companies.add(job.company);
    uniqueValues.locations.add(job.location);
  });

  const uniqueTitles = createListCollection({
    items: uniqueValues.titles ?? [],
    itemToString: (item) => item,
    itemToValue: (item) => item,
  });

  console.log(uniqueTitles);

  return (
    <Stack gap="5" width="320px" className={classes.stack}>
      <For each={["Title", "Company", "Location"]}>
        {(value) => (
          <Select.Root key={value} size="md" collection={uniqueTitles}>
            <Select.HiddenSelect />
            <Select.Label>{value}</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder={`Select ${value}`} />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {uniqueTitles.items.map((title, idx) => (
                    <Select.Item item={title} key={`${title.label}-${idx}`}>
                      {title.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      </For>
    </Stack>
  );
};

export default JobFilter;
