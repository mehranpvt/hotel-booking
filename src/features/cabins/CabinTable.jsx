import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabinTable } from "./useCabinTable";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabinTable();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="Cabins" />;
  // Filter
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabin;
  if (filterValue === "all") {
    filteredCabin = cabins;
  }
  if (filterValue === "no-discount") {
    filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filterValue === "with-discount") {
    filteredCabin = cabins.filter((cabin) => cabin.discount > 0);
  }

  // Sort
  const sortValue = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabin = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          // data={cabins}
          // data={filteredCabin}
          data={sortedCabin}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
