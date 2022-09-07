interface ToDo {
  id: number | null;
  text: string;
  finished_at: number | null;
  to_do_list_id: number;
}

export default ToDo;
