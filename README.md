Implementation of the hash map data structure.

- When a hash map is instantiated, an array with a size of 16 empty linked lists is
  created.
- All hash maps have a load factor of 0.75, meaning that when 75 per cent of the buckets
  is full, the current bucket capacity is doubled to reduce the chances of collisions.
- Methods such as set(), get(), has(), remove(), length(), clear(), keys(), values(), and
  entries() are present in all instances.
